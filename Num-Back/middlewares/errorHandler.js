const errorHandler = (err, req, res, next) => {
  // Manejar error de duplicidad (Código 11000)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const message = `Ya existe un usuario con ese ${field}. Por favor, verifica el dato ingresado.`;
    return res.status(400).json({
      ok: false,
      msg: message
    });
  }

  // Errores de validación de Mongoose
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      ok: false,
      msg: messages[0] // Retorna el primer error encontrado
    });
  }

  // Error genérico del servidor
  console.error(err);
  res.status(500).json({
    ok: false,
    msg: 'Ocurrió un error inesperado en el servidor'
  });
};

module.exports = errorHandler;
