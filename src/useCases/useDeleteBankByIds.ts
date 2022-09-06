import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import { VariablesBanks } from '../entity/banks';



const UseDeleteBankByIds = async (req: Request, res: Response) => {
  const { idBank, idFkClient } = new VariablesBanks(req.params);
  const connection = await connectionDataBase.connect();
  try{
if(idBank && idFkClient){
  const [rows] = await connection.execute("DELETE FROM bhub_data_banks WHERE id_bank=? AND id_fk_client=?",[idBank,idFkClient]) as RowDataPacket[];
  if(rows.affectedRows > 0){
    res.status(200).json({data: {delete: true}});
  }else{
    res.status(200).json({data: {delete: false}});
  }
}else{
  const [rows] = await connection.execute("DELETE FROM bhub_data_banks WHERE id_bank=?",[idBank]) as RowDataPacket[];
  if(rows.affectedRows > 0){
    res.status(200).json({data: {delete: true}});
  }else{
    res.status(200).json({data: {delete: false}});
  }

}
}catch(err){
  res.status(500).json({data: {server_status: "off"}});
}
}

export { UseDeleteBankByIds }