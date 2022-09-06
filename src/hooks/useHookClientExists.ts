import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import { InterfaceDataClient } from '../@types/InterfaceDataClient';
import connectionDataBase from '../database/databaseConnection';
import {VariablesClients} from '../entity/clients';

interface PropsClientsExists{
  ClientValidedBoolean: boolean;
}

const UseHookClientExists = async (InputsHook: Pick<InterfaceDataClient, "cnpj_number">): Promise<PropsClientsExists> => {
  const { cnpjNumber } = new VariablesClients(InputsHook);
  const connection = await connectionDataBase.connect();
  const [rows] = await connection.execute("SELECT cnpj_number FROM bhub_clients WHERE cnpj_number=? ",[cnpjNumber]) as RowDataPacket[];
  if(rows.length > 0){
    const ClientValidedBoolean = true;
    return {ClientValidedBoolean};
  }else{
    const ClientValidedBoolean = false;
    return {ClientValidedBoolean};
  }
 
}

export { UseHookClientExists };