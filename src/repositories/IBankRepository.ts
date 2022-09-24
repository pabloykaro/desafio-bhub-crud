import { Bank } from "../entities/Bank";

export interface IBankRepository{
  findByAccountBank(account_bank: string): Promise<boolean>;
  save(entityBank: Bank): Promise<void>;
}