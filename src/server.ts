import express from 'express';
import { useVarEnvs } from './middlewares/useVarEnvs';
import routes from './routes';

useVarEnvs();

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());
app.use(routes);


app.listen(PORT,HOST);