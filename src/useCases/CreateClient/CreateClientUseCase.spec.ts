import { beforeEach, describe, expect, test } from "vitest";

import { CreateClientRepositoryInMemory } from "../../repositories/CreateClientRepository/in-memory/CreateClientRepositoryInMemory";
import { CreateClientUseCase } from "./CreateClientUseCase";

let createClientRepositoryInMemory: CreateClientRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;

describe('Create Client', () => {
   beforeEach(() =>{
   createClientRepositoryInMemory = new CreateClientRepositoryInMemory();
   createClientUseCase = new CreateClientUseCase(createClientRepositoryInMemory);
   });

   test('should be able to create a new client', async () => {
      const createClientDTO = {
         corporate_name: 'Solutions Tecnologia BR',
         cnpj_number: '108381262356',
         telephone_number: '85994192707',
         address_city: 'Brazil',
         billing_declared: 5000,
        };

     await createClientUseCase.execute(createClientDTO);
     const findCnpjExists = await createClientRepositoryInMemory.findByCnpj(
      createClientDTO.cnpj_number
      );
      expect(findCnpjExists).toBeTruthy();
   });

   test('should not be able to create a new client with cnpj exists', async () => {
      expect( async () => {
         const createClientDTO =  {
            corporate_name: 'Solutions Tecnologia BR',
            cnpj_number: '108381262356',
            telephone_number: '85994192707',
            address_city: 'Brazil',
            billing_declared: 5000,
           };
           await createClientUseCase.execute(createClientDTO);
           await createClientUseCase.execute(createClientDTO);
      }).rejects.toBeInstanceOf(Error);

    });
});