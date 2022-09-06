import { Request, Response } from 'express';
import { UseDeleteBankByIds } from '../useCases/useDeleteBankByIds';

export default class ControllersDeleteBankByIds{
  handle(req:Request, res:Response){

    UseDeleteBankByIds(req,res);
  }
}