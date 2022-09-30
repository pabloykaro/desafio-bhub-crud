import { IClientRepository } from "../IClientRepository";
import { Client } from "../../entities/Client";
import { PrismaClient } from "@prisma/client";
import { ListClientDTO } from "../../useCases/ListClient/ListClientDTO";
const prisma = new PrismaClient();

export class ClientRepository implements IClientRepository{

   async findByCnpj(cnpj_number: string): Promise<boolean>{

    const findManyByCnpj = await prisma.bhub_clients.findMany({
      where: {
      cnpj_number
      }
    });

    if(findManyByCnpj.length > 0) return true;

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
    await prisma.bhub_clients.create({
      data: {
        id_client,
        cnpj_number, 
        corporate_name, 
        telephone_number, 
        address_city, 
        date_register_account, 
        billing_declared,
        status_account
      }
    });
   }

   async list(): Promise<Client[]> {

    const allClients = await prisma.bhub_clients.findMany();
   
    const clients = allClients.map((values: ListClientDTO) => values);
    return clients;
}
}