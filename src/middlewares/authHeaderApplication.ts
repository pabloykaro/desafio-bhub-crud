import { NextFunction, Request, Response } from 'express';

export function auth(req: Request, res: Response, next: NextFunction){
  if(req.headers.authorization === `Bearer ${process.env.API_AUTH}`){
    next();
  }else{
    res.status(400).json({err: "Set authorization for view applications"});
  }
}
