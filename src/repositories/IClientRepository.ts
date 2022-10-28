import { Client } from "../entities/Client";

export interface IClientRepository{
  findByCnpj(cnpj_number: string): Promise<Client>;
  save(entityClient: Client) : Promise<void>;
  delete(cnpj_number: string): Promise<void>;
  list(): Promise<Client[]>;
}