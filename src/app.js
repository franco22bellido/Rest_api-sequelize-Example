import express from 'express';
import personas_routes from './routes/personas_routes.js';
import mascotas_routes from './routes/mascotas_routes.js';

const app = express();

//middlewares
app.use(express.json());

app.use('/api/',personas_routes);
app.use('/api',mascotas_routes);
export default app;