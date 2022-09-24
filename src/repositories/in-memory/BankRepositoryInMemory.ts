import { Bank } from "../../entities/Bank";
import { IBankRepository } from "../IBankRepository";


export class BankRepositoryInMemory implements IBankRepository{

  public banks: Bank[] = [];

  async findByAccountBank(account_bank: string): Promise<boolean> {
    const bankFind = this.banks.find( bank => bank.account_bank === account_bank);
    if(bankFind) return true;
    return false;
  }
  async save(entityBank: Bank): Promise<void> {
    this.banks.push(entityBank);    
  }
}