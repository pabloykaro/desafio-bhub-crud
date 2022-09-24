import { ClientRepository } from "../../repositories/implementations/ClientRepository";
import { CreateClientUseCase } from "./CreateClientUseCase";
import { CreateClientController } from "./CreateClientController";

const createClientRepository = new ClientRepository();
const createClientUseCase = new CreateClientUseCase(createClientRepository);
const createClientController = new CreateClientController(createClientUseCase);



export { createClientController , createClientUseCase };