
export class Client{

  public corporateName: string;
  public cnpjNumber: string;
  public telephoneNumber: string;
  public addressCity: string;
  public dateRegisterAccount: string;
  public billingDeclared: number;

  constructor(props: Omit<Client, "dateRegisterAccount">, dateRegisterAccount?: string){
    Object.assign(this,props);
    if(!dateRegisterAccount){
      const getDateTime = new Date().toLocaleString();
      this.dateRegisterAccount = getDateTime;
    }
  }
}