import { Request } from "express";
import Joi from 'joi';

interface BodyPropsBanks{
  agency_account: number | boolean,
  account_bank: number | boolean,
  operation_account: number | boolean,
  bank_name: number | boolean,
}

export default class VariablesBanks{

  input: BodyPropsBanks;
  schema?: Joi.ObjectSchema<any>;

   constructor(req: Request){
    this.input = req.body;
   }

   get agencyAccount(): number | boolean{
    this.schema = Joi.object({
      agencyAccount: Joi.number().min(4).max(4).required()
    });

    const { value, error} = this.schema.validate({agencyAccount: this.input.agency_account});
    if(error){
      return false;
    }else{
      return value.agencyAccount;
    }
   }

   get accountBank(): number | boolean{
    this.schema = Joi.object({
      accountBank: Joi.number().min(8).max(8).required()
    });

    const { value, error} = this.schema.validate({accountBank: this.input.account_bank});
    if(error){
      return false;
    }else{
      return value.accountBank;
    }
   }

   get operationAccount(): number | boolean{
    this.schema = Joi.object({
      operationAccount: Joi.number().min(3).max(3).required()
    });

    const { value, error} = this.schema.validate({operationAccount: this.input.operation_account});
    if(error){
      return false;
    }else{
      return value.operationAccount;
    }
   }

   get bankName(): number | boolean{
    this.schema = Joi.object({
      bankName: Joi.string().min(8).required()
    });

    const { value, error} = this.schema.validate({bankName: this.input.bank_name});
    if(error){
      return false;
    }else{
      return value.bankName;
    }
   }

}