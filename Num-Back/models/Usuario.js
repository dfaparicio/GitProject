const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  documento: {
    type: String,
    required: [true, 'El documento es obligatorio'],
    unique: true
  },
  email: {
    type: String,
    required: [true, 'El correo es obligatorio'],
    unique: true,
    lowercase: true
  },
  rol: {
    type: String,
    required: [true, 'El rol es obligatorio'],
    enum: ['Docente', 'Administrativo']
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
