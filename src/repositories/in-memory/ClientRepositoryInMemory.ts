import { IClientRepository } from "../IClientRepository";
import { Client } from "../../entities/Client";


export class ClientRepositoryInMemory implements IClientRepository{
  
  public clients: Client[] = [];

   async findByCnpj(cnpj_number: string): Promise<Client>{
     return this.clients.find(client => client.cnpj_number === cnpj_number) as Client;
   }
   async save(entityClient: Client): Promise<void>{
    this.clients.push(entityClient);
   }
   async delete(cnpj_number: string): Promise<void> {
   const findAccountCnpj = 
   this.clients.filter(client => client.cnpj_number === cnpj_number);
   const deleteAccount = findAccountCnpj.map(client => ({...client,status_account: 'disabled'}));
   this.clients.pop();
   this.clients.push(...deleteAccount);
   }
   async list(): Promise<Client[]> {
    return this.clients;
  }
}