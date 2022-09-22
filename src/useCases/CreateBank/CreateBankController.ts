import { Request, Response } from "express";
import { CreateBankUseCase } from "./CreateBankUseCase";

export class CreateBankController{
  constructor(
    private createBankUseCase: CreateBankUseCase
  ){}
  async handle(request: Request, response: Response){
    const {
      id_fk_client,
      agency_account,
      account_bank,
      bank_name
    } = request.body;

    try{

      await this.createBankUseCase.execute({
      id_fk_client,
      agency_account,
      account_bank,
      bank_name
      });
      return response.status(201).json({data: {create: true}});
      
    }catch(err){
      console.log(err);
      return response.status(400).json({data: {create: false}});
    }
  } 
}