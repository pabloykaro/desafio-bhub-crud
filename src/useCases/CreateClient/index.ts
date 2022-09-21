import { CreateClientRepository } from "../../repositories/CreateClientRepository/implementations/CreateClientRepository";
import { CreateClientUseCase } from "./CreateClientUseCase";
import { CreateClientController } from "./CreateClientController";


const createClientRepository = new CreateClientRepository();
const createClientUseCase = new CreateClientUseCase(createClientRepository);
const createClientController = new CreateClientController(createClientUseCase);


export { createClientController , createClientUseCase };