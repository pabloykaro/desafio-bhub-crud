import { Request, Response } from 'express';
import { UseCreateBank } from '../useCases/useCreateBank';


export default class ControllersCreateBank{
  handle(req: Request, res: Response){
  UseCreateBank(req,res);
  }
}