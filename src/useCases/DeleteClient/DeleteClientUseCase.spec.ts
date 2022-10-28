import { beforeEach, describe, expect, test } from "vitest";

import { ClientRepositoryInMemory } from "../../repositories/in-memory/ClientRepositoryInMemory";
import { DeleteClientUseCase } from "./DeleteClientUseCase";
import { CreateClientDTO} from "../CreateClient/CreateClientDTO";
let clientRepositoryInMemory: ClientRepositoryInMemory;
let deleteClientUseCase: DeleteClientUseCase;

describe('Delete client', () => {
  beforeEach(() => {
    clientRepositoryInMemory = new ClientRepositoryInMemory();
    deleteClientUseCase = new DeleteClientUseCase(clientRepositoryInMemory);
  });

  test('should be delete a account', async () => {
    const createClientDTO: CreateClientDTO = {
      id_client: '123213123213',
      corporate_name: 'Solutions Tecnologia BR',
      cnpj_number: '108381262356',
      telephone_number: '85994192707',
      address_city: 'Brazil',
      billing_declared: "5000",
      date_register_account: '2022-04-02 12:00:00',
      status_account: 'active'
     }
  
   await clientRepositoryInMemory.save(createClientDTO);
   await deleteClientUseCase.execute(createClientDTO.cnpj_number);
   expect(clientRepositoryInMemory.findByCnpj(createClientDTO.cnpj_number)).resolves.toEqual({
    id_client: '123213123213',
    corporate_name: 'Solutions Tecnologia BR',
    cnpj_number: '108381262356',
    telephone_number: '85994192707',
    address_city: 'Brazil',
    billing_declared: "5000",
    date_register_account: '2022-04-02 12:00:00',
    status_account: 'disabled'
   });
   
  });

});
