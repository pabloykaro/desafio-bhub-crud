import { Request } from "express";
import Joi from 'joi';

interface BodyPropsClients {
  corporate_name: string | boolean,
  cnpj_number: string | boolean,
  telephone_number: string | boolean,
  address_city: string | boolean,
  date_register_account: string | boolean,
  billing_declared: number | boolean,
}

export default class VariablesClients{

  input: BodyPropsClients;
  schema?: Joi.ObjectSchema<any>;


   constructor(req: Request){
    this.input = req.body;
   }

   get corporateName(): string | boolean{
    this.schema = Joi.object({
      corporateName: Joi.string().min(8).required()
    });

    const { value, error} = this.schema.validate({corporateName: this.input.corporate_name});
    if(error){
      return false;
    }else{
      return value.corporateName;
    }
   }

   get cnpjNumber(): string | boolean{
    this.schema = Joi.object({
      cnpjNumber: Joi.string().length(14).pattern(/^[0-9]*$/)
    });

    const { value, error} = this.schema.validate({cnpjNumber: this.input.cnpj_number});
    if(error){
      return false;
    }else{
      return value.cnpjNumber;
    }
   }

   get telephoneNumber(): string | boolean{
    this.schema = Joi.object({
      telephoneNumber: Joi.string().pattern(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/).length(15).required()
    });

    const { value, error} = this.schema.validate({telephoneNumber: this.input.telephone_number});
    if(error){
      return false;
    }else{
      return value.telephoneNumber;
    }
   }

   get addressCity(): string | boolean{
    this.schema = Joi.object({
      addressCity: Joi.string().min(5).required()
    });

    const { value, error} = this.schema.validate({addressCity: this.input.address_city});
    if(error){
      return false;
    }else{
      return value.addressCity;
    }
   }

   get dateRegisterAccount(): string | boolean{
    this.schema = Joi.object({
      dateRegisterAccount: Joi.date().min(0).required()
    });

    const { value, error} = this.schema.validate({dateRegisterAccount: this.input.date_register_account});
    if(error){
      return false;
    }else{
      return value.dateRegisterAccount;
    }
   }
   
   get billingDeclared(): number | boolean{
    this.schema = Joi.object({
      billingDeclared: Joi.number().min(0).required()
    });

    const { value, error} = this.schema.validate({billingDeclared: this.input.billing_declared});
    if(error){
      return false;
    }else{
      return value.billingDeclared;
    }
   }

}