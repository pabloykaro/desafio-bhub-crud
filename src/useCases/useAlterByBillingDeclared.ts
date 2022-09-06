import { Request, Response} from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import { VariablesClients } from '../entity/clients';


const UseAlterByBillingDeclared = async (req: Request, res: Response) => {
  const { billingDeclared, idClient } = new VariablesClients(req.body);
   const connection = await connectionDataBase.connect();
   try{

   if(!billingDeclared){
    res.status(400).json({
      data: {create: false},
      err: {
        id_client: !idClient ? 'only numbers for id user client' : 'correct',
        billing_declared: !billingDeclared ? 'the input cannot be empty' : 'correct',
      }
    });
   }else{
    const [rows] = await connection.execute("UPDATE bhub_clients SET billing_declared = ? WHERE id_client = ?",[billingDeclared,idClient]) as RowDataPacket[];
    console.log(rows);
    if(rows.affectedRows > 0){
      res.status(200).json({data: {update: true}});
    }else{
      res.status(400).json({data: {update: false}});

    }
   }
   }catch(err){
    res.status(500).json({data: {server_status: "off"}});
   }

}

export { UseAlterByBillingDeclared};