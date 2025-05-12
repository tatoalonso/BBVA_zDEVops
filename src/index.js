// src/index.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta raíz que responde "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`🚀 Express funcionando: http://localhost:${PORT}`);
});