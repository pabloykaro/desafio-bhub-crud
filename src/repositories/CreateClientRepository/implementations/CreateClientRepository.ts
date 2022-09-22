import {connectDataBase, RowDataPacket} from "../../../database/databaseConnection";
import { ICreateClientRepository } from "../ICreateClientRepository";
import { Client } from "../../../entities/Client";


export class CreateClientRepository implements ICreateClientRepository{

   async findByCnpj(cnpj_number: string){
    const isConnectionMySql = await connectDataBase.connect();
    const querySelectClientByCnpj = `SELECT cnpj_number FROM bhub_clients WHERE cnpj_number=?`;
    const [rows] = await isConnectionMySql.execute(querySelectClientByCnpj,[cnpj_number]) as RowDataPacket[];

    if(rows.length > 0) return true;

    return false; 
   }

   async save(entitesClient: Client){
    const {
      id_client,
      cnpj_number, 
      corporate_name, 
      telephone_number, 
      address_city, 
      date_register_account, 
      billing_declared,
      status_account
     } = entitesClient;
      
    const isConnectionMySql = await connectDataBase.connect();
    const queryCreateClient = 
    `INSERT INTO bhub_clients(id_client,corporate_name,cnpj_number,telephone_number,
    address_city,date_register_account,billing_declared,status_account) VALUES(?,?,?,?,?,?,?,?)`;
    
    await isConnectionMySql.execute(queryCreateClient,
      [
      id_client,
      corporate_name,
      cnpj_number,
      telephone_number,
      address_city,
      date_register_account,
      billing_declared,
      status_account
      ]) as RowDataPacket[];

   }
}