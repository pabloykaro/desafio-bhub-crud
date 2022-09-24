import { Bank } from "../../entities/Bank";
import { IBankRepository } from "../../repositories/IBankRepository";
import { CreateBankRequestDTO } from "./CreateBankDTO";


export class CreateBankUseCase{
  constructor(
    private BankRepository: IBankRepository
  ){}
  async execute(data: Omit<CreateBankRequestDTO, "id_bank">){

    const bankAlreadyExists = await this.BankRepository.findByAccountBank(data.account_bank);
    if(bankAlreadyExists){
      throw new Error("Bank already exists.");
    }
    const bank = new Bank(data);
    await this.BankRepository.save(bank);
   
  }
}