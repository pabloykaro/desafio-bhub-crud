import { IClientRepository } from "../IClientRepository";
import { Client } from "../../entities/Client";


export class ClientRepositoryInMemory implements IClientRepository{
  
  public clients: Client[] = [];

   async findByCnpj(cnpj_number: string): Promise<boolean>{
     const clientFind = this.clients.find(client => client.cnpj_number === cnpj_number);
     if(clientFind) return true;
     return false;
   }

   async save(entityClient: Client): Promise<void>{
    this.clients.push(entityClient);
   }
   async list(): Promise<Client[]> {
    return this.clients;
  }
}