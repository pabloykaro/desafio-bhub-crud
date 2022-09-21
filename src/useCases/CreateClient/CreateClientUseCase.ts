import { ICreateClientRepository } from "../../repositories/CreateClientRepository/ICreateClientRepository";
import { CreateClientRequestDTO } from "./CreateClientDTO";
import { Client } from "../../entities/Client";

export class CreateClientUseCase{
     constructor(
      private createClientRepository: ICreateClientRepository
     ){}
  async execute(data: Omit<CreateClientRequestDTO, "dateRegisterAccount">){

    const clientAlreadyExists = await this.createClientRepository.findByCnpj(data.cnpjNumber);
    if(clientAlreadyExists){
      throw new Error('Client already exists.');
    }

    const client = new Client(data);
    await this.createClientRepository.save(client);
   
  }
}