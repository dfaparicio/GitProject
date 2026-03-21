import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './database/dbConnection.js';
import authRoutes from './routes/authRoutes.js';

// Configurar variables de entorno
dotenv.config();

// Inicializar Express
const app = express();

// Conectar a la base de datos (MongoDB/Mongoose)
dbConnection();

// Middlewares Globales
app.use(cors());
app.use(express.json()); // Solo JSON según ES6+

// Rutas de la API (Backend - Num-Back)
app.use('/api/auth', authRoutes);

// Ruta base de comprobación
app.get('/', (req, res) => {
    res.json({ msg: 'API Sistema San José - Estado: Funcional' });
});

// Manejo Global de Errores (Centralizado)
app.use((err, req, res, next) => {
    console.error(`[Error]: ${err.message}`);
    res.status(err.status || 500).json({
        success: false,
        msg: err.message || 'Error interno del servidor'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

export default app;
