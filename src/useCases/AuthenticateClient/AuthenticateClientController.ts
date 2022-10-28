import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController{
  constructor(
    private authenticateClientUseCase: AuthenticateClientUseCase
  ){}
  async handle(request: Request, response: Response){
      const { cnpj_number } = request.body;
      try{
       const token = await this.authenticateClientUseCase.execute(cnpj_number);
      return response.status(200).json(token);
      }catch(error){
        return response.status(400).json({
          client: "",
          token: ""
        });
      }
  }
}