import { beforeEach, describe, expect, test } from "vitest";

import { CreateClientRepositoryInMemory } from "../../repositories/CreateClientRepository/in-memory/CreateClientRepositoryInMemory";
import { CreateClientUseCase } from "./CreateClientUseCase";

let createClientRepositoryInMemory: CreateClientRepositoryInMemory;
let createClientUseCase: CreateClientUseCase;

describe('Create Client',() => {
   beforeEach(()=>{
   createClientRepositoryInMemory = new CreateClientRepositoryInMemory();
   createClientUseCase = new CreateClientUseCase(createClientRepositoryInMemory);
   });

   test('should be able to create a new client', async () => {
      const createClientDTO =  {
         corporateName: 'Solutions Tecnologia BR',
         cnpjNumber: '108381262356',
         telephoneNumber: '85994192707',
         addressCity: 'Brazil',
         billingDeclared: 5000,
        }
     await createClientUseCase.execute(createClientDTO);
     const findCnpjExists = await createClientRepositoryInMemory.findByCnpj(
      createClientDTO.cnpjNumber
      );
      expect(findCnpjExists).toBeTruthy();
   });

   test('should not be able to create a new client with cnpj exists', async () => {
      expect( async () => {
         const createClientDTO =  {
            corporateName: 'Solutions Tecnologia BR',
            cnpjNumber: '108381262356',
            telephoneNumber: '85994192707',
            addressCity: 'Brazil',
            billingDeclared: 5000,
           }
           await createClientUseCase.execute(createClientDTO);
           await createClientUseCase.execute(createClientDTO);
      }).rejects.toBeInstanceOf(Error);

    });
});