import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import {VariablesClients} from '../entity/clients';



const UseDeleteClientById = async (req: Request, res: Response) => {
  const { idClient } = new VariablesClients(req.params);
  const connection = await connectionDataBase.connect();
  try{
if(idClient !== false){
  const [rows] = await connection.execute("DELETE FROM bhub_clients WHERE id_client=?",[idClient]) as RowDataPacket[];
  if(rows.affectedRows > 0){
    res.status(200).json({data: {delete: true}});
  }else{
    res.status(400).json({data: {delete: false}});
  }
}else{
  res.status(400).json({data: {delete: false}});
}
}catch(err){
  res.status(500).json({data: {server_status: "off"}});
}
}

export { UseDeleteClientById };