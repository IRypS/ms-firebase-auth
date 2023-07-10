import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import rutasApp from './controller/routes.js';

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) )

app.use('/', rutasApp);

const PORT = process.env.PORT || 9050;

app.listen(
  PORT,
  () => {
    console.log(`📗 La app está funcionando en el puerto: http://localhost:${PORT}`);
  }
);
