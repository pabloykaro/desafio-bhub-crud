import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import connectionDataBase from '../database/databaseConnection';
import VariablesClients from '../entity/clients';

interface PropsClientsExists{
  userValidedBoolean: boolean;
}

const UseHookClientExists = async (req: Request): Promise<PropsClientsExists> => {
  const { cnpjNumber } = new VariablesClients(req);
  const connection = await connectionDataBase.connect();
  const [rows] = await connection.execute("SELECT cnpj_number FROM bhub_clients WHERE cnpj_number=? ",[cnpjNumber]) as RowDataPacket[];
  if(rows.length > 0){
    const userValidedBoolean = true;
    return {userValidedBoolean};
  }else{
    const userValidedBoolean = false;
    return {userValidedBoolean};
  }
 
}

export { UseHookClientExists };