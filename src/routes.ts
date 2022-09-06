import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import DocsApi from '../swagger.json';

import { auth } from './middlewares/authHeaderApplication';
import ControllersCreateClient from './controllers/controllersCreateClient';
import ControllersCreateBank from './controllers/controllersCreateBank';
import ControllersSelectAllClients from './controllers/controllersSelectAllClients';
import ControllersSelectAllBanksOrFindId from './controllers/controllersSelectAllBanksOrFindId';
import ControllersDeleteBankByIds from './controllers/controllersDeleteBankByIds';
import ControllersDeleteClientById from './controllers/controllersDeleteClientById';
import ControllersAlterByBillingDeclared from './controllers/controllersAlterByBillingDeclared';



const routes = Router();


// Documentation Api Rest
routes.use('/api-docs',swaggerUi.serve);
routes.get('/api-docs',swaggerUi.setup(DocsApi));
// ---------------------

// Auth Bearer Api Rest
routes.use(auth);
// ---------------------

// Request Post
const useControllersCreateClient = new ControllersCreateClient;
routes.post('/createclient', useControllersCreateClient.handle);

const useControllersCreateBank = new ControllersCreateBank;
routes.post('/createbank',  useControllersCreateBank.handle);
// -----------------

// Routes Get
const useControllersSelectAllClient = new ControllersSelectAllClients;
routes.get('/clients/:id_client?', useControllersSelectAllClient.handle);

const usecontrollersSelectAllBanksOrFindId = new ControllersSelectAllBanksOrFindId;
routes.get('/banks/:id_client?', usecontrollersSelectAllBanksOrFindId.handle);
// -----------------

// Routes Patch
const usecontrollersAlterByBillingDeclared = new ControllersAlterByBillingDeclared;
routes.patch('/alt-billing', usecontrollersAlterByBillingDeclared.handle);
// -----------------


// Routes Delete
const useControllersDeleteBankByIds = new ControllersDeleteBankByIds;
routes.delete('/dlt-banks/:id_bank/:id_fk_client?', useControllersDeleteBankByIds.handle);

const useControllersDeleteClientById = new ControllersDeleteClientById;
routes.delete('/dlt-clients/:id_client',  useControllersDeleteClientById.handle);
// -----------------


export default routes;