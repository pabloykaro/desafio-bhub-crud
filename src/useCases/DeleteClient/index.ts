import { ClientRepository } from "../../repositories/implementations/ClientRepository";
import { DeleteClientUseCase } from "./DeleteClientUseCase";
import { DeleteClientController } from "./DeleteClientController";

const clientRepository = new ClientRepository();
const deleteClientUseCase = new DeleteClientUseCase(clientRepository);
const deleteClientController = new DeleteClientController(deleteClientUseCase);

export { deleteClientController, deleteClientUseCase };