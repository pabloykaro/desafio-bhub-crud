import { Request, Response } from "express";
import { ListClientUseCase } from "./ListClientUseCase";


export class ListClientController{
  constructor(
    private listClientUseCase: ListClientUseCase
  ){}

  async handle(request: Request, response: Response){
  const result = await this.listClientUseCase.execute();
  response.status(200).json({data: result});
  }
}