const bcrypt = require('bcryptjs');

/**
 * Hashea una contraseña utilizando 10 rondas de salt.
 * @param {string} password - Contraseña en texto plano
 * @returns {Promise<string>} Contraseña hasheada
 */
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

/**
 * Compara una contraseña en texto plano con un hash.
 * @param {string} password - Contraseña en texto plano
 * @param {string} hash - Contraseña hasheada
 * @returns {Promise<boolean>} Resultado de la comparación
 */
const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = {
  hashPassword,
  comparePassword
};
