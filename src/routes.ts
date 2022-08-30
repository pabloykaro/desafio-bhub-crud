import { Router, Request, Response } from 'express';

import ControllersCreateClient from './controllers/controllersCreateClient';
import ControllersCreateBank from './controllers/controllersCreateBank';

const routes = Router();

const useControllersCreateClient = new ControllersCreateClient;
routes.post('/createclient', (req: Request, res: Response) => useControllersCreateClient.handle(req,res));

const useControllersCreateBank = new ControllersCreateBank;
routes.post('/createbank', (req: Request, res: Response) => useControllersCreateBank.handle(req,res));

export default routes;