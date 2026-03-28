const Usuario = require('../models/Usuario');

const registrarUsuario = async (req, res) => {
  try {
    const { nombre, documento, email, rol, password } = req.body;

    // Verificar si el usuario ya existe por documento o email
    const usuarioExistente = await Usuario.findOne({ $or: [{ documento }, { email }] });
    if (usuarioExistente) {
      return res.status(400).json({ msg: 'El usuario con ese documento o email ya está registrado' });
    }

    const nuevoUsuario = new Usuario({
      nombre,
      documento,
      email,
      rol,
      password // Nota: En una implementación real, aquí se debe hashear la contraseña
    });

    await nuevoUsuario.save();

    res.status(201).json({
      ok: true,
      msg: 'Usuario registrado exitosamente',
      usuario: { nombre, email, rol }
    });

  } catch (error) {
    console.error('Error en registro:', error);
    res.status(500).json({ msg: 'Hubo un error al registrar el usuario' });
  }
};

module.exports = {
  registrarUsuario
};
