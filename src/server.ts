import express from 'express';
import cors from 'cors';
import routes from './routes';


const PORT = 3333;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(PORT, () => console.log('running server'));