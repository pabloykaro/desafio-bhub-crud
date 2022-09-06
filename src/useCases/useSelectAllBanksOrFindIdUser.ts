import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import {VariablesClients} from '../entity/clients';



const UseSelectAllBanksOrFindIdUser = async (req: Request, res: Response) => {
  
  const { idClient } = new VariablesClients(req.params);

  const connection = await connectionDataBase.connect();
  
try{
  if(idClient){
    console.log(idClient);
     const [rows] = await connection.execute("SELECT * FROM bhub_data_banks WHERE id_fk_client=?",[idClient]) as RowDataPacket[];
     if(rows.length > 0){
      res.status(200).json({data: rows});
     }else{
     
      res.status(400).json({data: {not_exists_account_banks: true}});
     }
  }else{
    const [rows] = await connection.query("SELECT * FROM bhub_data_banks") as RowDataPacket[];
    if(rows.length > 0){
     res.status(200).json({data: rows});
    }else{
     res.status(400).json({data: {not_exists_account_banks: true}});
  }
}
}catch(err){
  res.status(500).json({data: {server_status: "off"}});
}
}
export { UseSelectAllBanksOrFindIdUser };