import { Request, Response } from 'express';
import { UseDeleteClientById } from '../useCases/useDeleteClientById';


export default class ControllersDeleteClientById{
    handle(req: Request, res: Response){
      UseDeleteClientById(req,res);
    }
  }