import { Request, Response } from "express"
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController{

  constructor(
    private createClientUseCases: CreateClientUseCase
   ){}
  async handle(request: Request, response: Response){

    const { 
      corporateName,
      cnpjNumber,
      telephoneNumber,
      addressCity,
      billingDeclared } = request.body;

    try{
      
    await this.createClientUseCases.execute({
      corporateName,
      cnpjNumber,
      telephoneNumber,
      addressCity,
      billingDeclared });
     
    return response.status(201).json({data: {create: true}});

    }catch(err){
      console.log(err);
      return response.status(400).json({data: {create: false}});
    }
  }
}