import { Client } from "../../entities/Client";

export interface ICreateClientRepository{
  findByCnpj(cnpjNumber: string): Promise<boolean>;
  save(entitesClient: Client) : Promise<void>;
}