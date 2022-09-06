import { Request, RequestParamHandler } from "express";
import Joi from 'joi';

 interface BodyPropsBanks{
  agency_account: string | boolean,
  account_bank: string | boolean,
  bank_name: string | boolean,
  id_fk_client: number | boolean,
  id_bank: number | boolean
}





export  class VariablesBanks{

  private input: BodyPropsBanks;
  private schema?: Joi.ObjectSchema<any>;

   constructor(input: any){
    this.input = input;
   }

   get idBank(): number | boolean{
    this.schema = Joi.object({
      idBank: Joi.number().min(0).required()
    });

    const { value, error} = this.schema.validate({idBank: this.input.id_bank});
    if(error){
      return false;
    }else{
      return value.idBank;
    }
   }

   get idFkClient(): number | boolean{
    this.schema = Joi.object({
      idFkClient: Joi.number().min(0).required()
    });

    const { value, error} = this.schema.validate({idFkClient: this.input.id_fk_client});
    if(error){
      return false;
    }else{
      return value.idFkClient;
    }
   }

   get agencyAccount(): string | boolean{
    this.schema = Joi.object({
      agencyAccount: Joi.string().length(4).pattern(/^[0-9]*$/).required()
    });

    const { value, error} = this.schema.validate({agencyAccount: this.input.agency_account});
    if(error){
      return false;
    }else{
      return value.agencyAccount;
    }
   }

   get accountBank(): string | boolean{
    this.schema = Joi.object({
      accountBank: Joi.string().pattern(/^[0-9]*$/).required().min(5)
    });

    const { value, error} = this.schema.validate({accountBank: this.input.account_bank});
    if(error){
      return false;
    }else{
      return value.accountBank;
    }
   }


   get bankName(): string | boolean{
    this.schema = Joi.object({
      bankName: Joi.string().min(4).required()
    });

    const { value, error} = this.schema.validate({bankName: this.input.bank_name});
    if(error){
      return false;
    }else{
      return value.bankName;
    }
   }

}