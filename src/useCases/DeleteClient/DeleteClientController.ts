import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";


export class DeleteClientController{
  constructor(
    private deleteClientUseCase: DeleteClientUseCase
  ){}
  async handle(request: Request, response: Response){
   const { cnpj_number } = request.body;
   try{
    await this.deleteClientUseCase.execute(cnpj_number);
    return response.status(200).json({data:{"delete": true}});
   }catch(error){
    return response.status(400).json({data:{"delete": false}});
   }
 
  }
}