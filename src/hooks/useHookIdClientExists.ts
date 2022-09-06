import { Request, Response } from 'express';
import { RowDataPacket } from 'mysql2';
import { InterfaceDataClient } from '../@types/InterfaceDataClient';
import connectionDataBase from '../database/databaseConnection';
import {VariablesClients} from '../entity/clients';

interface PropsIdClientsExists{
  IdClientValidedBoolean: boolean;
}

const UseHookIdClientExists = async (InputsHook: Pick<InterfaceDataClient, "id_client">): Promise<PropsIdClientsExists> => {
  const { idClient } = new VariablesClients(InputsHook);
  const connection = await connectionDataBase.connect();
  const [rows] = await connection.execute("SELECT id_client FROM bhub_clients WHERE id_client=? ",[idClient]) as RowDataPacket[];
  if(rows.length > 0){
    const IdClientValidedBoolean = true;
    return {IdClientValidedBoolean};
  }else{
    const IdClientValidedBoolean = false;
    return {IdClientValidedBoolean};
  }
 
}

export { UseHookIdClientExists };