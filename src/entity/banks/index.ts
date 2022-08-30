import { Request } from "express";
import Joi from 'joi';

interface BodyPropsBanks{
  agency_account: string | boolean,
  account_bank: string | boolean,
  bank_name: string | boolean,
  id_pk_client: number | boolean
}

export default class VariablesBanks{

  input: BodyPropsBanks;
  schema?: Joi.ObjectSchema<any>;

   constructor(req: Request){
    this.input = req.body;
   }

   get idPkClient(): number | boolean{
    this.schema = Joi.object({
      idPkClient: Joi.number().min(0).required()
    });

    const { value, error} = this.schema.validate({idPkClient: this.input.id_pk_client});
    if(error){
      return false;
    }else{
      return value.idPkClient;
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
      accountBank: Joi.string().length(9).pattern(/^[0-9]*$/).required()
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