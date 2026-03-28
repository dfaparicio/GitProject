import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import mongoose from 'mongoose'; // TODO: Falta configurar la base de datos

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API del Colegio San José', status: 'ONLINE' });
});

// TODO: Crear las rutas de autenticación:
// app.post('/api/auth/login', loginHandler)
// app.post('/api/auth/recover', recoverHandler)

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
