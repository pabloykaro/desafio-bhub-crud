import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController{

  constructor(
    private createClientUseCases: CreateClientUseCase
   ){}
  async handle(request: Request, response: Response){

    const { 
      corporate_name,
      cnpj_number,
      telephone_number,
      address_city,
      billing_declared } = request.body;

    try{
      
    await this.createClientUseCases.execute({
      corporate_name,
      cnpj_number,
      telephone_number,
      address_city,
      billing_declared });
     
    return response.status(201).json({data: {create: true}});

    }catch(err){
      console.log(err);
      return response.status(400).json({data: {create: false}});
    }
  }
}