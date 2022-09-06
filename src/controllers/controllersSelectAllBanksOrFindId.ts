import { Request, Response } from 'express';
import { UseSelectAllBanksOrFindIdUser } from '../useCases/useSelectAllBanksOrFindIdUser';

export default class ControllersSelectAllBanksOrFindId{
  handle(req: Request, res: Response){
    console.log(req);
    UseSelectAllBanksOrFindIdUser(req,res);
  }
}