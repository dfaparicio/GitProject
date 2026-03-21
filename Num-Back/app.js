import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

// Configurar variables de entorno
dotenv.config();

const app = express();

// Middlewares Globales
app.use(cors());
app.use(express.json()); // Body Parser para JSON

// Rutas de la API
app.use('/api/auth', authRoutes);

// Ruta base para comprobación
app.get('/', (req, res) => {
    res.json({ msg: 'API Control de Asistencia San José activa' });
});

// Middleware Global de Manejo de Errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: true,
        msg: err.message || 'Error interno del servidor'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;
