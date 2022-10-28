import { Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import DocsApi from '../swagger.json';

import { createClientController } from "./useCases/CreateClient/index";
import { createBankController } from './useCases/CreateBank';
import { listClientController } from './useCases/ListClient';
import { deleteClientController } from './useCases/DeleteClient';
const routes = Router();


// Documentation Api Rest
routes.use('/api-docs',swaggerUi.serve);
routes.get('/api-docs',swaggerUi.setup(DocsApi));
// ---------------------

routes.post('/clients', (request: Request, response: Response) => {
  return createClientController.handle(request, response);
});

routes.get('/clients', (request: Request, response: Response) => {
  return listClientController.handle(request, response);
});

routes.delete('/clients', (request: Request, response: Response) => {
  return deleteClientController.handle(request, response);
});

routes.post('/banks', (request: Request, response: Response) => {
  return createBankController.handle(request, response);
});





export default routes;