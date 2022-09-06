import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import {VariablesBanks} from '../entity/banks';
import {VariablesClients} from '../entity/clients';
import { UseHookBankExists } from '../hooks/useHookBankExists';
import { UseHookIdClientExists } from '../hooks/useHookIdClientExists';




const UseCreateBank = async (req: Request, res: Response) => {
  const { idClient } = new VariablesClients(req.body);
   const { agencyAccount, accountBank, bankName } = new VariablesBanks(req.body);
   const { bankValidedBoolean } = await UseHookBankExists(req.body);
   const { IdClientValidedBoolean } = await UseHookIdClientExists(req.body);
   const connection = await connectionDataBase.connect();
 
   try{
      if(!idClient || !agencyAccount || !accountBank || !bankName){
        res.status(400).json({
          data: {create: false},
          err: {
            id_client: !idClient ? 'only numbers for id user client' : 'correct',
            agency_account: !agencyAccount ? 'only numbers and 4 digit size allowed' : 'correct',
            account_bank: !accountBank ? 'only numbers and not less than 5 digit size allowed' : 'correct',
            bank_name: !bankName ? 'cannot be less than 4' : 'correct',
          }
        });
      }else{
        if(!bankValidedBoolean){
          if(IdClientValidedBoolean){
          const [rows] = await connection.execute("INSERT INTO bhub_data_banks(id_fk_client,agency_account,account_bank,bank_name) VALUES(?,?,?,?)",
          [idClient, agencyAccount, accountBank, bankName]) as RowDataPacket[];
          if(rows.affectedRows > 0 ){
            res.status(201).json({data: {create: true}});
          }else{
            res.status(400).json({data: {create: false}});
          }
        }else{
          res.status(400).json({data: {create: false}});
        }
      }else{
        res.status(400).json({data: {create: false}});
      }
        
      }
   }catch(err){
    res.status(500).json({data: {server_status: "off"}});
   }
}
export { UseCreateBank };