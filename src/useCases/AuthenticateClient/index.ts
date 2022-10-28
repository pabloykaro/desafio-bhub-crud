import { ClientRepository } from "../../repositories/implementations/ClientRepository";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";
import { AuthenticateClientController } from "./AuthenticateClientController";

const clientRepository = new ClientRepository();
const authenticateClientUseCase = new AuthenticateClientUseCase(clientRepository);
const authenticateClientController = new AuthenticateClientController(authenticateClientUseCase);

export { authenticateClientController, authenticateClientUseCase };

