const express = require('express');
const app = express();
const port = 3000;

// GitProject #7 - Tarea: Configuración del servidor (10h, Alta).
// Responsable: andft
// Estado: En Proceso

app.get('/', (req, res) => {
  res.send('Servidor configurado');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
