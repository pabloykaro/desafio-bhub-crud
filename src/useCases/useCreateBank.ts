import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import VariablesBanks from '../entity/banks';
import VariablesClients from '../entity/clients';
import { UseHookBankExists } from '../hooks/useHookBankExists';
import { UseHookIdClientExists } from '../hooks/useHookIdClientExists';




const UseCreateBank = async (req: Request, res: Response) => {
  const { idClient } = new VariablesClients(req);
   const { agencyAccount, accountBank, bankName } = new VariablesBanks(req);
   const { bankValidedBoolean } = await UseHookBankExists(req);
   const { IdValidedBoolean } = await UseHookIdClientExists(req);
   try{
      if(!idClient || !agencyAccount || !accountBank || !bankName){
        res.status(400).json({
          data: 'empty_data',
          err: {
            id_client: !idClient ? 'only numbers for id user client' : 'correct',
            agency_account: !agencyAccount ? 'only numbers and 4 digit size allowed' : 'correct',
            account_bank: !accountBank ? 'only numbers and 9 digit size allowed' : 'correct',
            bank_name: !bankName ? 'cannot be less than 4' : 'correct',
          }
        });
      }else{
        if(!bankValidedBoolean){
          if(IdValidedBoolean){
          const connection = await connectionDataBase.connect();
          const [rows] = await connection.execute("INSERT INTO bhub_data_banks(id_pk_client,agency_account,account_bank,bank_name) VALUES(?,?,?,?)",
          [idClient, agencyAccount, accountBank, bankName]) as RowDataPacket[];
          if(rows.affectedRows > 0 ){
            res.status(201).json({data: 'create_bank'});
          }else{
            res.status(400).json({data: 'not_create_bank'});
          }
        }else{
          res.status(400).json({data: 'not_exists_client_for_id'});
        }
      }else{
        res.status(200).json({data: 'bank_exists'});
      }
        
      }
   }catch(err){
    res.status(400).json({data: 'not_create_bank'});
   }
}
export { UseCreateBank };