const mongoose = require('mongoose');

/**
 * Establece la conexión con la base de datos de MongoDB.
 */
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/registro_usuarios_db';
    
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('✅ Conexión exitosa a la base de datos MongoDB');
  } catch (error) {
    console.error('❌ Error de conexión a la base de datos:', error.message);
    process.exit(1); // Termina el proceso con fallo
  }
};

module.exports = { connectDB };
