import { BankRepository } from "../../repositories/implementations/BankRepository";
import { CreateBankUseCase } from "./CreateBankUseCase";
import { CreateBankController } from "./CreateBankController";

const createBankRepository = new BankRepository();
const createBankUseCase = new CreateBankUseCase(createBankRepository);
const createBankController = new CreateBankController(createBankUseCase);

export { createBankController, createBankUseCase };