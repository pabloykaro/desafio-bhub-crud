import { Request, Response } from 'express';
import { UseCreateClient } from '../useCases/useCreateClient';


export default class ControllersCreateClient{
  
   handle(req: Request, res: Response){
   
    UseCreateClient(req,res);
    
  }
}