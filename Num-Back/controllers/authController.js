const Usuario = require('../models/Usuario');
const { hashPassword } = require('../helpers/hashPassword');

/**
 * Registra un nuevo docente o personal administrativo.
 * Delega los errores al middleware central de errores (como el de duplicidad 11000).
 */
const registrarUsuario = async (req, res, next) => {
  try {
    const { nombre, documento, email, rol, password } = req.body;

    // 1. Hashear la contraseña antes de guardar (C3)
    const passwordHasheada = await hashPassword(password);

    // 2. Crear nueva instancia de usuario con timestamps automáticos
    const nuevoUsuario = new Usuario({
      nombre,
      documento,
      email,
      rol,
      password: passwordHasheada
    });

    // 3. Guardar en la base de datos (se validan unique: true en el modelo)
    await nuevoUsuario.save();

    // 4. Respuesta exitosa
    res.status(201).json({
      ok: true,
      msg: 'Usuario registrado exitosamente',
      usuario: { nombre, documento, email, rol }
    });

  } catch (error) {
    // Pasar el error al middleware errorHandler
    next(error);
  }
};

module.exports = {
  registrarUsuario
};
