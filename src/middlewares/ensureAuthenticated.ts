import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ClientRepository } from "../repositories/implementations/ClientRepository";

interface IPayload{
  sub: string;
}

export async function ensureAuthenticated(
  request: Request, 
  response: Response, 
  next: NextFunction){
  const authHeader = request.headers.authorization;
  if(!authHeader){
    response.status(401);
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");
  try{
   const {sub: sub_id} = verify(
    token, 
    "3671f0d1ec8bd0e478a8b62cf0270aba"
    ) as IPayload;

    const clientRepository = new ClientRepository();
    const client =  clientRepository.findByIdClient(sub_id);
    if(!client){
      response.status(400);
      throw new Error("Client not exists");
    }
    response.status(200);
    next();
  }catch(error){
    throw new Error("Invalid token!");
  }
}