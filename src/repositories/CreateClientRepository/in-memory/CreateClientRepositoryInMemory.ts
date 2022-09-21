import { ICreateClientRepository } from "../ICreateClientRepository";
import { Client } from "../../../entities/Client";


export class CreateClientRepositoryInMemory implements ICreateClientRepository{

  public clients: Client[] = [];

   async findByCnpj(cnpjNumber: string): Promise<boolean>{
     const client = this.clients.find((client) => client.cnpjNumber === cnpjNumber);
     if(client) return true;
     
     return false;
   }

   async save(entitesClient: Client): Promise<void>{
    this.clients.push(entitesClient);
   }
}