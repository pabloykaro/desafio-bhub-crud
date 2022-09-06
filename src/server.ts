import express from 'express';
import { useVarEnvs } from './middlewares/useVarEnvs';
import routes from './routes';

useVarEnvs();

const PORT = process.env.PORT || 5050;

const app = express();
app.use(express.json());
app.use(routes);


app.listen(PORT, () => console.log('running server'));