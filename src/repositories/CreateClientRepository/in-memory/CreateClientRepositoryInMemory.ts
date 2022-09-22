import { ICreateClientRepository } from "../ICreateClientRepository";
import { Client } from "../../../entities/Client";


export class CreateClientRepositoryInMemory implements ICreateClientRepository{

  public clients: Client[] = [];

   async findByCnpj(cnpj_number: string): Promise<boolean>{
     const client = this.clients.find((client) => client.cnpj_number === cnpj_number);
     if(client) return true;
     
     return false;
   }

   async save(entitesClient: Client): Promise<void>{
    this.clients.push(entitesClient);
   }
}