const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre completo es obligatorio'],
    trim: true
  },
  documento: {
    type: String,
    required: [true, 'El documento de identidad es obligatorio'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'El correo institucional es obligatorio'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, 'Por favor, ingresa un correo válido']
  },
  rol: {
    type: String,
    required: [true, 'El rol es obligatorio'],
    enum: {
      values: ['Docente', 'Administrativo'],
      message: '{VALUE} no es un rol válido'
    }
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatoria']
  }
}, {
  timestamps: true // C3: Registro automático de creación y actualización
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
