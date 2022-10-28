import { IClientRepository } from "../../repositories/IClientRepository";


export class DeleteClientUseCase {
  constructor(
    private ClientRepository: IClientRepository
  ){}
  async execute(cnpj_number: string){
    const findByCnpjClient = this.ClientRepository.findByCnpj(cnpj_number);
    
    if(!findByCnpjClient){
      throw new Error('Client not exists');
    }
    await this.ClientRepository.delete(cnpj_number);
  }
}