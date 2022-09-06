import { Request, Response } from 'express';
import { UseSelectAllClient } from '../useCases/useSelectAllClients';


export default class ControllersSelectAllClients{

  handle(req: Request, res: Response){
    UseSelectAllClient(req,res);
  }
}