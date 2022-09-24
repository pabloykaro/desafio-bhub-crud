import { beforeEach, describe, test, expect } from "vitest";

import { ClientRepositoryInMemory } from "../../repositories/in-memory/ClientRepositoryInMemory";
import { CreateClientDTO } from "../CreateClient/CreateClientDTO";
import { ListClientUseCase } from "./ListClientUseCase";

let listClientUseCase: ListClientUseCase;
let clientRepositoryInMemory: ClientRepositoryInMemory;

describe('List Client', () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    listClientUseCase = new ListClientUseCase(clientRepositoryInMemory);
    
  });

  test('should be able list clients', async () => {

    const createClientDTO: CreateClientDTO = {
      id_client: '123213123213',
      corporate_name: 'Solutions Tecnologia BR',
      cnpj_number: '108381262356',
      telephone_number: '85994192707',
      address_city: 'Brazil',
      billing_declared: 5000,
      date_register_account: '2022-04-02 12:00:00',
      status_account: 'active'
     }
  
    await clientRepositoryInMemory.save(createClientDTO);
   const result = await listClientUseCase.execute();
   expect(result).toEqual([createClientDTO]);

  });

});