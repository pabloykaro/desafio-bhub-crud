import { format } from "date-fns";

export class Client{

  public corporate_name: string;
  public cnpj_number: string;
  public telephone_number: string;
  public address_city: string;
  public date_register_account: string;
  public billing_declared: number;

  constructor(props: Omit<Client, "date_register_account">, date_register_account?: string){
    Object.assign(this,props);
    if(!date_register_account){
      const getDateTimeNow = new Date(Date.now());
      const getFormatDateTime = format(getDateTimeNow,"yyyy-MM-dd HH:mm:ss");
      this.date_register_account = getFormatDateTime;
    }
  }
}