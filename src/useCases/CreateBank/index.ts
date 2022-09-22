import { CreateBankRepository } from "../../repositories/implementations/CreateBankRepository";
import { CreateBankUseCase } from "./CreateBankUseCase";
import { CreateBankController } from "./CreateBankController";

const createBankRepository = new CreateBankRepository();
const createBankUseCase = new CreateBankUseCase(createBankRepository);
const createBankController = new CreateBankController(createBankUseCase);

export { createBankController, createBankUseCase };