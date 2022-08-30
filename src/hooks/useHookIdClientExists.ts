import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import VariablesClients from '../entity/clients';

interface PropsIdClientsExists{
  IdValidedBoolean: boolean;
}

const UseHookIdClientExists = async (req: Request): Promise<PropsIdClientsExists> => {
  const { idClient } = new VariablesClients(req);
  const connection = await connectionDataBase.connect();
  const [rows] = await connection.execute("SELECT id_client FROM bhub_clients WHERE id_client=? ",[idClient]) as RowDataPacket[];
  if(rows.length > 0){
    const IdValidedBoolean = true;
    return {IdValidedBoolean};
  }else{
    const IdValidedBoolean = false;
    return {IdValidedBoolean};
  }
 
}

export { UseHookIdClientExists };