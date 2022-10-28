import { IClientRepository } from "../../repositories/IClientRepository";
import { sign } from "jsonwebtoken";

interface IResponse {
  client: {
    cnpj_number: string;
    corporate_name: string;
    status_account: string;
  };
  token: string;
}

export class AuthenticateClientUseCase{
  constructor(
    private ClientRepository: IClientRepository
  ){}

  async execute(cnpj_number: string): Promise<IResponse>{
    const client = await this.ClientRepository.findByCnpj(cnpj_number);
    
    if(!client){
      throw new Error("Client incorrect!");
    }
    if(client.status_account === "disabled"){
      throw new Error("Client disabled!");
    }
    const token = sign({},"3671f0d1ec8bd0e478a8b62cf0270aba",{
      subject: client.id_client,
      expiresIn: "1d"
    });
   const tokenReturn: IResponse = {
    client: {
     cnpj_number: client.cnpj_number,
     corporate_name: client.corporate_name,
     status_account: client.status_account,
    },
    token
   } 
   return tokenReturn;
  }
}