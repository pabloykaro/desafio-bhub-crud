import { describe, beforeEach, test, expect } from "vitest";
import { BankRepositoryInMemory } from "../../repositories/in-memory/BankRepositoryInMemory";
import { CreateBankUseCase } from "./CreateBankUseCase";
import { CreateBankRequestDTO } from "./CreateBankDTO";
let createBankRepositoryInMemory: BankRepositoryInMemory;
let createBankUseCase: CreateBankUseCase;

describe('Create Bank', () => {
  beforeEach(()=> {
    createBankRepositoryInMemory = new BankRepositoryInMemory();
    createBankUseCase = new CreateBankUseCase(createBankRepositoryInMemory);
  });

  test('should be able to create a new bank', async () => {
    const createBankDTO: Omit<CreateBankRequestDTO, "id_bank"> = {
      id_fk_client: '56dbb5ac-1144-4a5a-9634-1bc6ad5e2fd2',
      agency_account: '2002',
      account_bank: '8727123-02',
      bank_name: 'Bradesco'
    };
    await createBankUseCase.execute(createBankDTO);
    const findByAccountBank = createBankRepositoryInMemory.findByAccountBank(createBankDTO.account_bank);
    expect(findByAccountBank).toBeTruthy();
  });

  test('should not be able to create a new bank with account_bank exists', async () => {
  expect( async () => {
    const createBankDTO: Omit<CreateBankRequestDTO, "id_bank"> = {
      id_fk_client: '56dbb5ac-1144-4a5a-9634-1bc6ad5e2fd2',
      agency_account: '2002',
      account_bank: '8727123-02',
      bank_name: 'Bradesco'
    };
    await createBankUseCase.execute(createBankDTO);
    await createBankUseCase.execute(createBankDTO);
  }).rejects.toBeInstanceOf(Error);
   });


});