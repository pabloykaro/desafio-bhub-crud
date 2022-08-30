import { Router, Request, Response } from 'express';

import ControllersCreateClient from './controllers/controllersCreateClient';

const routes = Router();

const useControllersCreateClient = new ControllersCreateClient;
routes.post('/createclient', (req: Request, res: Response) => useControllersCreateClient.loadCreate(req,res));

export default routes;