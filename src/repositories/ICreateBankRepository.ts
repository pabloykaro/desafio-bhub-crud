import { Bank } from "../entities/Bank";

export interface ICreateBankRepository{
  findByAccountBank(account_bank: string): Promise<boolean>;
  save(entityBank: Bank): Promise<void>;
}