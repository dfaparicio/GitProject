# Sistema de Control de Asistencia Colegio San José

Este proyecto es una plataforma digital para la gestión de asistencia del Colegio San José, diseñada para docentes y personal administrativo.

## Estructura del Proyecto

### 1. Num-Back (Backend)
API REST desarrollada con Node.js y Express.
- `/controllers`: Lógica de negocio (Autenticación, Gestión de Usuarios).
- `/models`: Esquemas de datos con Mongoose (Usuario).
- `/routes`: Definición de endpoints.
- `/database`: Configuración de MongoDB.
- `app.js`: Servidor principal.

### 2. Num-Front (Frontend)
Interfaz de usuario desarrollada con Vue 3, Quasar y Vite.
- `/src/views`: Páginas principales (Login, Dashboard).
- `/src/layouts`: Estructura base de la aplicación.
- `/src/router`: Navegación y protección de rutas.
- `/src/main.js`: Inicialización de la aplicación.

## Requerimientos Implementados
- **HUS-01:** Autenticación de Usuarios (Login) con validación de dominio institucional y persistencia en `localStorage`.
- **HUS-02:** Registro de Nuevos Usuarios con políticas de seguridad en contraseñas.
- **HUS-03:** Dashboard Docente con visualización de horario, alertas críticas y acceso rápido a toma de asistencia.

## Gestión del Proyecto
El detalle de las tareas, tiempos estimados y organización del equipo se encuentra en el archivo [PROJECT_MANAGEMENT.md](./PROJECT_MANAGEMENT.md).

### Ramas de Desarrollo
- `main`: Código estable.
- `andft`: Desarrollo de componentes Frontend y persistencia local.
- `dfaparicio`: Desarrollo de lógica de Backend y API.

## Tecnologías Utilizadas
- **Backend:** Node.js (ESM), Express, Mongoose, Dotenv, Cors.
- **Frontend:** Vue 3 (Composition API), Quasar Framework, Vue Router, LocalStorage.
