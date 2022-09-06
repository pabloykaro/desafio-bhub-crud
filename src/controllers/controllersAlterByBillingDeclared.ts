import { Request, Response } from "express";
import { UseAlterByBillingDeclared } from "../useCases/useAlterByBillingDeclared";



export default class ControllersAlterByBillingDeclared{

handle(req: Request, res: Response){
  UseAlterByBillingDeclared(req,res);
}
}