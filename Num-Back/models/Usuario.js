import mongoose from 'mongoose';

const UsuarioSchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        required: [true, 'El nombre completo es obligatorio']
    },
    documentoIdentidad: {
        type: String,
        required: [true, 'El número de documento es obligatorio'],
        unique: true
    },
    correoInstitucional: {
        type: String,
        required: [true, 'El correo institucional es obligatorio'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@sanjose\.edu\.co$/, 'El correo debe pertenecer al dominio @sanjose.edu.co']
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio'],
        enum: ['Docente', 'Admin']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
        // La validación compleja se manejará en el controlador/helper antes de guardar
    },
    estado: {
        type: String,
        default: 'Activo'
    },
    intentosFallidos: {
        type: Number,
        default: 0
    },
    bloqueadoHasta: {
        type: Date,
        default: null
    }
}, { timestamps: true });

export default mongoose.model('Usuario', UsuarioSchema);
