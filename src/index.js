import express from 'express';
import mergeRouter from './merge.js';

const app = express();
app.use(express.json());

// Montamos el router en /merge
app.use('/merge', mergeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servicio escuchando en http://localhost:${PORT}/merge`)
);