import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import VariablesClients from '../entity/clients';

import { format } from 'date-fns';
import { UseHookClientExists } from '../hooks/useHookClientExists';


const UseCreateClient = async(req: Request, res: Response) => {
  const { corporateName, cnpjNumber, telephoneNumber, addressCity, billingDeclared } = new VariablesClients(req);
  const { userValidedBoolean } = await UseHookClientExists(req);

  try{
    if(!corporateName || !cnpjNumber || !telephoneNumber || !addressCity || !billingDeclared){

        res.status(400).json({
          data: 'empty_data',
          err: {
          corporate_name: !corporateName ? 'cannot be less than 8' : 'correct',
          cnpj_number: !cnpjNumber ? 'must be equal to 14 digits integers': 'correct',
          telephone_number: !telephoneNumber ? 'type in pattern (XX) XXXXX-XXXX' : 'correct',
          address_city: !addressCity ? 'cannot be less than 5' : 'correct',
          billing_declared: !billingDeclared ? 'it cannot be empty' : 'correct'
          }
        });
      }else{

  if(!userValidedBoolean){
  const connection = await connectionDataBase.connect();

  const date_register_now = format(new Date(Date.now()),'y-MM-d HH:m:s');

  const [rows] = await connection.execute("INSERT INTO bhub_clients(corporate_name,cnpj_number,telephone_number,address_city,date_register_account,billing_declared) VALUES(?,?,?,?,?,?)",[corporateName,cnpjNumber,telephoneNumber,addressCity,date_register_now,billingDeclared]) as RowDataPacket[];
   if(rows.affectedRows > 0){
    res.status(201).json({data: 'create_account'});
   }else{
    res.status(400).json({data: 'not_create_account'});
   }
  }else{
    res.status(200).json({data: 'account_exists'});
  }
    }
  }catch(err){
    res.status(400).json({data: 'not_create_account'});
  }
      
}

export { UseCreateClient };