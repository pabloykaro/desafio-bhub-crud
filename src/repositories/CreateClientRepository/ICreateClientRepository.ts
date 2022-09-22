import { Client } from "../../entities/Client";

export interface ICreateClientRepository{
  findByCnpj(cnpj_number: string): Promise<boolean>;
  save(entitesClient: Client) : Promise<void>;
}