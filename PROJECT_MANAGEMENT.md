# Gestión del Proyecto: Digitalización Colegio San José

## 1. Planificación de Historias de Usuario (Backlog)

### [HUS-01] Autenticación de Usuarios (Login)
*   **[HUS-01-T1] Diseño UI Login (Labels: Frontend, UI | Priority: Alta | Estimate: 0.5h | Branch: andft)**
    *   *Descripción: Crear el formulario visual con campos de correo y contraseña usando Quasar Framework.*
*   **[HUS-01-T2] Validación de Dominio (Labels: Frontend, Logic | Priority: Alta | Estimate: 0.5h | Branch: andft)**
    *   *Descripción: Implementar lógica en el frontend para restringir el acceso solo a correos @sanjose.edu.co.*
*   **[HUS-01-T3] Persistencia LocalStorage (Labels: Frontend, Storage | Priority: Media | Estimate: 1.0h | Branch: andft)**
    *   *Descripción: Guardar el objeto user_session en el navegador para mantener la sesión tras recargar.*
*   **[HUS-01-T4] Controlador Login API (Labels: Backend, Auth | Priority: Alta | Estimate: 1.0h | Branch: dfaparicio)**
    *   *Descripción: Desarrollar la lógica en Node.js para verificar credenciales y manejar intentos fallidos.*

### [HUS-02] Registro de Usuarios
*   **[HUS-02-T1] Schema de Usuario (Labels: Backend, Database | Priority: Alta | Estimate: 1.0h | Branch: dfaparicio)**
    *   *Descripción: Crear el modelo Mongoose con campos obligatorios, unique:true y timestamps:true.*
*   **[HUS-02-T2] Regex Password Policy (Labels: Backend, Security | Priority: Media | Estimate: 0.5h | Branch: dfaparicio)**
    *   *Descripción: Implementar validación: 8 caracteres, 1 mayúscula, 1 número y 1 carácter especial.*
*   **[HUS-02-T3] Endpoint Registro (Labels: Backend, API | Priority: Alta | Estimate: 1.0h | Branch: dfaparicio)**
    *   *Descripción: Crear la ruta POST /api/auth/registro y manejar errores de duplicidad (documento/email).*

### [HUS-03] Dashboard Principal
*   **[HUS-03-T1] Layout de Dashboard (Labels: Frontend, UI | Priority: Media | Estimate: 1.0h | Branch: andft)**
    *   *Descripción: Estructurar la vista principal con QCard para separar horario y estadísticas.*
*   **[HUS-03-T2] Indicador de Asistencia (Labels: Frontend, DataViz | Priority: Baja | Estimate: 0.5h | Branch: andft)**
    *   *Descripción: Implementar componente QKnob para mostrar el porcentaje semanal de asistencia.*
*   **[HUS-03-T3] Alertas Críticas (Labels: Frontend, Feature | Priority: Alta | Estimate: 1.0h | Branch: andft)**
    *   *Descripción: Crear sección de notificaciones para estudiantes con más de 3 fallas acumuladas.*

## 2. Estrategia de Git (Ramas)

El proyecto se organiza bajo las siguientes ramas de desarrollo:

*   **`main`:** Rama de producción, contiene código estable.
*   **`andft`:** Rama de desarrollo para funcionalidades del Frontend (Persistencia local, UI Components).
*   **`dfaparicio`:** Rama de desarrollo para lógica de Backend (Modelos, API Endpoints, Middlewares).

## 3. Registro de Ejecución

| Fecha | Tarea | Rama | Desarrollador | Tiempo |
| :--- | :--- | :--- | :--- | :--- |
| 20/03/2026 | Reestructuración de carpetas y base inicial | main | Gemini CLI | 0.5h |
| 20/03/2026 | Implementación de HUS-01 y HUS-02 (Backend) | dfaparicio | Gemini CLI | 2h |
| 20/03/2026 | Implementación de HUS-01 y HUS-03 (Frontend + LocalStorage) | andft | Gemini CLI | 2h |

## 4. Estado del Proyecto
*   **Frontend:** Funcional con persistencia en `localStorage`.
*   **Backend:** Estructura completa y lista para integración con MongoDB.
*   **Documentación:** Completa en `README.md` y `PROJECT_MANAGEMENT.md`.
