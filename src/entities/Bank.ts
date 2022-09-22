import { v4 as uuid } from "uuid";
export class Bank{
  public readonly id_bank: string;
  public id_fk_client: string;
  public agency_account: string;
  public account_bank: string;
  public bank_name: string;

  constructor(props: Omit<Bank, "id_bank">, id_bank?: string){
    Object.assign(this,props);

    if(!id_bank){
      this.id_bank = uuid();
    }
  }
}