import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Main Route (Health check)
app.get('/', (req, res) => {
  res.json({
    message: 'API del Colegio San José - Backend Funcionando',
    status: 'ONLINE',
    version: '1.0.0'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
