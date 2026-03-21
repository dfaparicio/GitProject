import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/colegioSanJose');
        console.log('Base de datos conectada correctamente a MongoDB');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        process.exit(1); // Detener el proceso si la conexión falla
    }
};

export default dbConnection;
