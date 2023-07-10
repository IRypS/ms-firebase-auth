import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';


import rutasApp from './controller/routes.js';

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) )
app.use( cors() );
app.use('/', rutasApp);

const PORT = process.env.PORT || 9050;

app.listen(
  PORT,
  () => {
    console.log(`📗 La app está funcionando en el puerto: http://localhost:${PORT}`);
  }
);
