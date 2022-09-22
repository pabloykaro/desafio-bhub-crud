import { v4 as uuid } from "uuid";
import { format } from "date-fns";

export class Client{
  public readonly id_client: string;
  public corporate_name: string;
  public cnpj_number: string;
  public telephone_number: string;
  public address_city: string;
  public readonly date_register_account: string;
  public billing_declared: number;
  public readonly status_account: string;

  constructor(
    props: Omit<Client, "id_client" | "date_register_account" | "status_account">,
    id_client?: string,
    date_register_account?: string, 
    status_account?: string){
      
    Object.assign(this,props);
    if(!date_register_account && !id_client && !status_account){
      const getDateTimeNow = new Date(Date.now());
      const getFormatDateTime = format(getDateTimeNow,"yyyy-MM-dd HH:mm:ss");
      this.date_register_account = getFormatDateTime;
      this.id_client = uuid();
      this.status_account = "active";
    }
  }
}