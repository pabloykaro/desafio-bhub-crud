import {dataBaseMYSQL, RowDataPacket} from "../../database/databaseConnection";
import { IClientRepository } from "../IClientRepository";
import { Client } from "../../entities/Client";
import { ClientRequestDTO } from "../../useCases/CreateClient/CreateClientDTO";


export class ClientRepository implements IClientRepository{

   async findByCnpj(cnpj_number: string): Promise<boolean>{
    const connection = await dataBaseMYSQL.connect();

    const querySelectClientByCnpj = 
    `SELECT cnpj_number FROM bhub_clients WHERE cnpj_number=?`;
    const [rows] = await connection.execute(
      querySelectClientByCnpj,[cnpj_number]) as RowDataPacket[];

    if(rows.length > 0) return true;

    return false; 
   }

   async save(entitesClient: Client): Promise<void>{
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
      
    const connection = await dataBaseMYSQL.connect();
    const queryCreateClient = 
    `INSERT INTO bhub_clients(id_client,corporate_name,cnpj_number,telephone_number,
    address_city,date_register_account,billing_declared,status_account) VALUES(?,?,?,?,?,?,?,?)`;
    
    await connection.execute(
      queryCreateClient,
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
   async list(): Promise<Client[]> {
    const connection = await dataBaseMYSQL.connect();
    const querySelectAllClient = 
    `SELECT * FROM bhub_clients`;
    const [rows] = await connection.query(querySelectAllClient) as RowDataPacket[];
    const clients = rows.map((values: ClientRequestDTO) => values);
    return clients;
}
}