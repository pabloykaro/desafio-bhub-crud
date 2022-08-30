import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import VariablesBanks from '../entity/banks';

interface PropsBanksExists{
  bankValidedBoolean: boolean;
}

const UseHookBankExists = async (req: Request): Promise<PropsBanksExists> => {
  const { agencyAccount, accountBank, bankName } = new VariablesBanks(req);
  const connection = await connectionDataBase.connect();
  const [rows] = await connection.execute("SELECT * FROM bhub_data_banks WHERE (agency_account=? OR account_bank=? OR bank_name=?)",[agencyAccount,accountBank,bankName]) as RowDataPacket[];
  if(rows.length > 0){
    const bankValidedBoolean = true;
    return {bankValidedBoolean};
  }else{
    const bankValidedBoolean = false;
    return {bankValidedBoolean};
  }
 
}

export { UseHookBankExists };