*Caso de Estudio: Digitalización del Control de Asistencia "San José"*

El Colegio San José cuenta con 1.200 estudiantes y 60 docentes. Actualmente, la toma de asistencia se realiza de forma manual en planillas de papel que cada profesor carga durante la jornada. Al finalizar la semana, un auxiliar administrativo debe digitar cada una de estas fallas en un archivo Excel maestro.

El proceso actual presenta los siguientes puntos críticos:

Falta de tiempo real: Los padres de familia solo se enteran de las ausencias en el reporte mensual, lo que impide una reacción temprana ante la deserción o el ausentismo.

Error Humano: Las planillas suelen dañarse, perderse o presentar tachaduras que dificultan la digitalización.

Carga Administrativa: El auxiliar administrativo dedica el 30% de su jornada laboral únicamente a transcribir datos de asistencia.

Debemos diseñar un módulo que permita a los docentes registrar la asistencia en menos de 2 minutos desde cualquier dispositivo (móvil o PC), garantizando que la información esté disponible inmediatamente para la coordinación académica.

*HUS-01: Autenticación de Usuarios (Login)*
*Como:* Usuario del sistema (Docente o Administrativo).
*Quiero:* Ingresar mis credenciales (correo institucional y contraseña).
*Para:* Acceder de forma segura a las funciones de registro de asistencia y gestión académica.

*Criterios de Aceptación:*

C1: El sistema debe validar que el correo electrónico tenga un formato válido y pertenezca al dominio del colegio.

C2: Si las credenciales son incorrectas, el sistema debe mostrar un mensaje de error genérico: "Usuario o contraseña incorrectos", para evitar exposición de datos.

C3: El sistema debe permitir la recuperación de contraseña mediante un enlace enviado al correo electrónico registrado.

C4: Tras tres intentos fallidos, el sistema debe bloquear la cuenta temporalmente por 15 minutos por motivos de seguridad.
*HUS-02: Registro de Nuevos Usuarios*
*Como:* Administrador del sistema.
*Quiero:* Registrar a los nuevos docentes y personal administrativo en la plataforma.
*Para:* Habilitar sus permisos de acceso y asignarles los grupos de estudiantes correspondientes.

*Criterios de Aceptación:*

C1: El formulario de registro debe capturar: Nombre completo, Documento de identidad, Correo institucional, Rol (Docente/Admin) y Contraseña.

C2: La contraseña debe cumplir con políticas de seguridad: mínimo 8 caracteres, una mayúscula, un número y un carácter especial.

C3: El sistema debe verificar que el correo electrónico o el documento de identidad no existan previamente en la base de datos.

C4: Al finalizar el registro, el sistema debe enviar un correo de bienvenida automático con las instrucciones iniciales de uso.

*HUS-03: Visualización de Dashboard Principal*
*Como:* Docente autenticado.
*Quiero:* Visualizar un tablero de control (Dashboard) inmediatamente después de iniciar sesión.
*Para:* Tener una vista rápida de mis clases del día y el estado general de asistencia de mis grupos.

*Criterios de Aceptación:*

C1: El Dashboard debe mostrar el horario del docente para el día actual, destacando la clase que está en curso o la próxima a iniciar.

C2: Debe incluir un gráfico o indicador visual con el porcentaje de asistencia acumulado de la semana para sus grupos asignados.

C3: Debe presentar una sección de "Alertas Críticas" para estudiantes que sumen más de 3 fallas consecutivas sin justificar.

C4: Debe incluir un botón de acceso rápido ("Acceso Directo") para iniciar la toma de asistencia de la clase actual en un solo clic.

ontexto y Estándares del Proyecto (Node.js & Vue 3)
Stack Tecnológico
El proyecto se divide en dos entornos independientes, comunicados a través de peticiones HTTP:
Backend (API REST): Node.js (LTS), Express.js, MongoDB con Mongoose (ODM). Lenguaje JavaScript Puro (ES6+) bajo el sistema de módulos ESM. No se utiliza TypeScript.
Frontend (Cliente): Vue 3 (Composition API), Vite, y Quasar Framework.









Estructura de Carpetas
La arquitectura está separada en dos directorios principales para mantener la independencia entre el servidor y el cliente.
Zona Backend (Num-Back)
Contiene toda la lógica del servidor, API y base de datos. Nota: No utiliza carpeta /src contenedora.
•	/controllers: Lógica de negocio y procesamiento de las peticiones (req, res).
•	/database: Archivos de configuración y conexión a MongoDB.
•	/helpers: Funciones de apoyo, utilidades generales y formateadores de datos.
•	/middlewares: Funciones intermedias (validación de tokens, manejo global de errores).
•	/models: Esquemas y modelos de datos de Mongoose.
•	/routes: Definición de los endpoints de Express y asignación de controladores.
•	app.js: Archivo principal de entrada, inicialización de Express y middlewares globales.
•	endpoints.json: Colección o documentación de las rutas de la API.
•	.env: Variables de entorno (puertos, cadenas de conexión, secretos).
•	
Zona Frontend (Num-Front)
Contiene la interfaz de usuario.
•	/public: Archivos estáticos que no pasan por el proceso de compilación.
•	/src/assets: Recursos multimedia (imágenes, fuentes, iconos).
•	/src/components: Componentes visuales reutilizables (botones, modales, tarjetas).
•	/src/composables: Lógica reactiva reutilizable usando Composition API.
•	/src/layouts: Estructuras base de las páginas (ej. el contenedor principal con el menú).
•	/src/plugins: Configuración e inicialización de librerías externas.
•	/src/router: Configuración de navegación y protección de rutas.
•	/src/services: Lógica para consumir la API REST del backend (peticiones HTTP).
•	/src/store: Gestor de estado global de la aplicación.
•	/src/styles: Hojas de estilo globales y variables CSS/SASS.
•	/src/utils: Funciones utilitarias específicas del lado del cliente.
•	/src/views: Vistas principales o páginas completas de la aplicación.
Reglas de Código (Backend - Estilo ES6)
1.	Módulos ESM: Usar estrictamente la sintaxis import x from 'y' y export. Queda prohibido el uso de require o module.exports.
2.	Asincronía Moderna: Utilizar exclusivamente async/await para el manejo de promesas. Evitar la sintaxis encadenada de .then() y .catch().
3.	Manejo de Errores Centralizado: En los controladores, toda la lógica debe estar envuelta en un bloque try/catch. Cualquier error capturado debe delegarse al middleware global utilizando next(error).
4.	Inmutabilidad por Defecto: Declarar variables usando const. Utilizar let única y exclusivamente cuando el valor deba ser reasignado dinámicamente. Nunca usar var.
5.	Funciones de Flecha: Preferir las Arrow Functions (() => {}) para la creación de middlewares, controladores y funciones utilitarias.
6.	Nomenclatura Estricta: Utilizar camelCase para nombrar variables, constantes y funciones (ej. obtenerReporteMensual, datosUsuario).
Convenciones de Base de Datos (Mongoose)
1.	Nombres de Modelos: Los archivos de los modelos deben nombrarse en singular y utilizar PascalCase (ej. Supervisor.js, Reporte.js).
2.	Trazabilidad: Es obligatorio incluir la opción timestamps: true al final de cada Schema para generar automáticamente los campos de auditoría createdAt y updatedAt.
3.	Validación Fuerte: Todos los campos obligatorios del esquema deben utilizar la propiedad required acompañada de un mensaje de error personalizado (ej. required: [true, 'El número de documento es obligatorio']).
