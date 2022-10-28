import { beforeEach, describe, expect, test } from "vitest";

import { ClientRepositoryInMemory } from "../../repositories/in-memory/ClientRepositoryInMemory";
import { CreateClientUseCase } from "./CreateClientUseCase";
import { CreateClientDTO } from "./CreateClientDTO";
let createClientRepositoryInMemory: ClientRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;

describe('Create Client', () => {
   beforeEach(() =>{
   createClientRepositoryInMemory = new ClientRepositoryInMemory();
   createClientUseCase = new CreateClientUseCase(createClientRepositoryInMemory);
   });

   test('should be able to create a new client', async () => {
      const createClientDTO: 
      Omit<CreateClientDTO,
      "id_client" | "date_register_account" | "status_account"> 
      = {
         corporate_name: 'Solutions Tecnologia BR',
         cnpj_number: '108381262356',
         telephone_number: '85994192707',
         address_city: 'Brazil',
         billing_declared: "5000",
        };

     await createClientUseCase.execute(createClientDTO);
     const findCnpjExists = await createClientRepositoryInMemory.findByCnpj(
      createClientDTO.cnpj_number
      );
   
      expect(findCnpjExists).toHaveProperty("id_client");
   });

   test('should not be able to create a new client with cnpj exists', async () => {
      expect( async () => {
         const createClientDTO: 
         Omit<CreateClientDTO,
         "id_client" | "date_register_account" | "status_account"> 
         = {
            corporate_name: 'Solutions Tecnologia BR',
            cnpj_number: '108381262356',
            telephone_number: '85994192707',
            address_city: 'Brazil',
            billing_declared: "5000",
           };
           await createClientUseCase.execute(createClientDTO);
           await createClientUseCase.execute(createClientDTO);
      }).rejects.toBeInstanceOf(Error);

    });
});