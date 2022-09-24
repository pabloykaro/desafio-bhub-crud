import { Client } from "../entities/Client";

export interface IClientRepository{
  findByCnpj(cnpj_number: string): Promise<boolean>;
  save(entityClient: Client) : Promise<void>;
  list(): Promise<Client[]>;
}