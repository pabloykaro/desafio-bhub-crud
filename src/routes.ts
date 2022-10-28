import { Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import DocsApi from '../swagger.json';

import { createClientController } from './useCases/CreateClient/index';
import { createBankController } from './useCases/CreateBank';
import { listClientController } from './useCases/ListClient';
import { deleteClientController } from './useCases/DeleteClient';
import { authenticateClientController } from './useCases/AuthenticateClient';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
const routes = Router();


// Documentation Api Rest
routes.use('/api-docs',swaggerUi.serve);
routes.get('/api-docs',swaggerUi.setup(DocsApi));
// ---------------------

routes.post('/sessions', (request: Request, response: Response) => {
  return authenticateClientController.handle(request, response);
});

routes.post('/clients',ensureAuthenticated, (request: Request, response: Response) => {
  return createClientController.handle(request, response);
});

routes.get('/clients',ensureAuthenticated, (request: Request, response: Response) => {
  return listClientController.handle(request, response);
});

routes.delete('/clients',ensureAuthenticated, (request: Request, response: Response) => {
  return deleteClientController.handle(request, response);
});

routes.post('/banks',ensureAuthenticated, (request: Request, response: Response) => {
  return createBankController.handle(request, response);
});





export default routes;