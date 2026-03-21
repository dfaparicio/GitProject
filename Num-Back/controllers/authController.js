import Usuario from '../models/Usuario.js';

const authController = {
    login: async (req, res, next) => {
        try {
            const { correoInstitucional, password } = req.body;
            const usuario = await Usuario.findOne({ correoInstitucional });

            if (!usuario) {
                return res.status(401).json({ msg: 'Usuario o contraseña incorrectos' });
            }

            // Verificar si la cuenta está bloqueada temporalmente
            if (usuario.bloqueadoHasta && usuario.bloqueadoHasta > new Date()) {
                const minutos = Math.ceil((usuario.bloqueadoHasta - new Date()) / 60000);
                return res.status(403).json({ msg: `Cuenta bloqueada. Intente de nuevo en ${minutos} minutos` });
            }

            // Comparación de password simplificada para ejemplo (usar bcrypt en prod)
            if (usuario.password !== password) {
                usuario.intentosFallidos += 1;
                
                if (usuario.intentosFallidos >= 3) {
                    usuario.bloqueadoHasta = new Date(Date.now() + 15 * 60 * 1000); // 15 minutos
                    usuario.intentosFallidos = 0; // Reiniciar para el próximo ciclo
                    await usuario.save();
                    return res.status(403).json({ msg: 'Cuenta bloqueada temporalmente por 15 minutos' });
                }
                
                await usuario.save();
                return res.status(401).json({ msg: 'Usuario o contraseña incorrectos' });
            }

            // Reiniciar intentos fallidos al login exitoso
            usuario.intentosFallidos = 0;
            usuario.bloqueadoHasta = null;
            await usuario.save();

            res.status(200).json({
                msg: 'Login exitoso',
                usuario: {
                    nombre: usuario.nombreCompleto,
                    rol: usuario.rol
                }
            });

        } catch (error) {
            next(error);
        }
    },

    registro: async (req, res, next) => {
        try {
            const { nombreCompleto, documentoIdentidad, correoInstitucional, rol, password } = req.body;

            // Validación de contraseña (mín 8, 1 mayús, 1 num, 1 esp)
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(password)) {
                return res.status(400).json({ 
                    msg: 'La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial' 
                });
            }

            // El modelo de Mongoose ya verifica unicidad (unique: true)
            const nuevoUsuario = new Usuario({
                nombreCompleto,
                documentoIdentidad,
                correoInstitucional,
                rol,
                password // En producción se debe cifrar
            });

            await nuevoUsuario.save();

            res.status(201).json({ 
                msg: 'Usuario registrado exitosamente y correo de bienvenida enviado (Simulado)' 
            });

        } catch (error) {
            if (error.code === 11000) {
                return res.status(400).json({ msg: 'El correo o el documento ya existen en la base de datos' });
            }
            next(error);
        }
    }
};

export default authController;
