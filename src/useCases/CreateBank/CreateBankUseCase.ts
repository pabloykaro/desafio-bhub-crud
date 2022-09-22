import { Bank } from "../../entities/Bank";
import { ICreateBankRepository } from "../../repositories/ICreateBankRepository";
import { CreateBankRequestDTO } from "./CreateBankDTO";


export class CreateBankUseCase{
  constructor(
    private createBankRepository: ICreateBankRepository
  ){}
  async execute(data: Omit<CreateBankRequestDTO, "id_bank">){

    const bankAlreadyExists = await this.createBankRepository.findByAccountBank(data.account_bank);
    if(bankAlreadyExists){
      throw new Error("Bank already exists.");
    }
    const bank = new Bank(data);
    await this.createBankRepository.save(bank);
   
  }
}