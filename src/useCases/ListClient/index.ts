import { ClientRepository } from "../../repositories/implementations/ClientRepository";
import { ListClientUseCase } from "./ListClientUseCase";
import { ListClientController } from "./ListClientController";


const clientRepository = new ClientRepository();
const listClientUseCase = new ListClientUseCase(clientRepository);
const listClientController = new ListClientController(listClientUseCase);

export { listClientController, listClientUseCase };

