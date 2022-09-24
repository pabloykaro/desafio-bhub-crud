import { IClientRepository } from "../../repositories/IClientRepository"; 
import { CreateClientDTO } from "./CreateClientDTO";
import { Client } from "../../entities/Client";

export class CreateClientUseCase{
     constructor(
      private ClientRepository: IClientRepository
     ){}
  async execute(data: Omit<CreateClientDTO,"id_client" | "date_register_account" | "status_account">){

    const clientAlreadyExists = await this.ClientRepository.findByCnpj(data.cnpj_number);
    if(clientAlreadyExists){
      throw new Error('Client already exists.');
    }

    const client = new Client(data);
    await this.ClientRepository.save(client);
   
  }
}