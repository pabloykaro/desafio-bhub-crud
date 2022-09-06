import { RowDataPacket } from 'mysql2';
import { InteraceDataBank } from '../Interfaces/InterfaceDataBank';
import connectionDataBase from '../database/databaseConnection';
import {VariablesBanks} from '../entity/banks';

interface PropsBanksExists{
  bankValidedBoolean: boolean;
}

const UseHookBankExists = async (InputsHook: Pick<InteraceDataBank, "agency_account" | "account_bank">): Promise<PropsBanksExists> => {
  const { agencyAccount, accountBank } = new VariablesBanks(InputsHook);
  const connection = await connectionDataBase.connect();
  const [rows] = await connection.execute("SELECT * FROM bhub_data_banks WHERE (agency_account=? OR account_bank=?)",[agencyAccount,accountBank]) as RowDataPacket[];
  if(rows.length > 0){
    const bankValidedBoolean = true;
    return {bankValidedBoolean};
  }else{
    const bankValidedBoolean = false;
    return {bankValidedBoolean};
  }
 
}

export { UseHookBankExists };