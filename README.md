# 🏫 Sistema de Gestión de Asistencia Colegio San José

Proyecto de digitalización para el control de asistencia de 1.200 estudiantes y 60 docentes. Diseñado para optimizar el registro en menos de 2 minutos desde cualquier dispositivo.

---

## 🛠️ Stack Tecnológico (Estándares Profesora)

### Backend (Num-Back)
- **Node.js (LTS)** con módulos **ESM** (`import/export`).
- **Express.js** con manejo de errores centralizado.
- **MongoDB** + **Mongoose** (Modelos PascalCase, timestamps).
- Sin carpeta `/src` (estructura directa por carpetas de funcionalidad).

### Frontend (Num-Front)
- **Vue 3** (Composition API) + **Vite**.
- **Quasar Framework** (UI) + **Vue Router**.
- **LocalStorage** para persistencia funcional de sesión.

---

## 📂 Arquitectura de Carpetas
- `Num-Back/`: `/controllers`, `/database`, `/models`, `/routes`, `/middlewares`.
- `Num-Front/`: `/src/views`, `/src/layouts`, `/src/router`, `/src/services`.

---

📋 Configuración de Git Project (Tasks & Hours)
Copia estas tareas en tu tablero de Git Project para cumplir con el 100% de los requerimientos.


🔐 [HUS-01] Autenticación (Login) - 3.0h Totales
Responsable: andft (TODO completo)

[HUS-01-T1] Formulario Login Quasar (Frontend | UI | Alta | 0.5h | Branch: andft)
C1: Validar formato de correo y dominio @sanjose.edu.co.

[HUS-01-T2] Errores Genéricos y C3: Recuperación (Frontend | UI | Media | 0.5h | Branch: andft)
C2: Mostrar mensaje genérico de error y enlace de recuperación.

[HUS-01-T3] Persistencia en LocalStorage (Frontend | Storage | Media | 1.0h | Branch: andft)
Cuidado: Mantener sesión funcional tras recargar navegador.

[HUS-01-T4] Lógica de Bloqueo C4 (Backend | Auth | Alta | 1.0h | Branch: andft)
Bloquear cuenta por 15 minutos tras 3 intentos fallidos.




📝 [HUS-02] Registro de Usuarios - 2.5h Totales
Responsable: dfaparicio (TODO completo)

[HUS-02-T1] Formulario de Registro C1 (Frontend | UI | Alta | 0.5h | Branch: dfaparicio)
Capturar: Nombre, Documento, Correo, Rol y Contraseña.

[HUS-02-T2] Esquema Usuario Mongoose C3 (Backend | Database | Alta | 1.0h | Branch: dfaparicio)
Verificar unicidad de correo y documento identidad.

[HUS-02-T3] Política Seguridad C2 (Backend | Security | Media | 0.5h | Branch: dfaparicio)
Contraseña: Mín 8 carac, 1 Mayús, 1 Num, 1 Especial.

[HUS-02-T4] Correo de Bienvenida C4 (Backend | API | Baja | 0.5h | Branch: dfaparicio)
Simular envío de instrucciones al finalizar el registro.




📊 [HUS-03] Dashboard Principal - 2.5h Totales
Responsables: andft & dfaparicio (Trabajo compartido)

[HUS-03-T1] Horario Docente C1 (Frontend | UI | Media | 1.0h | Branch: andft)
Mostrar clases del día destacando la actual/próxima.

[HUS-03-T2] Indicador de Asistencia C2 (Frontend | DataViz | Baja | 0.5h | Branch: andft)
Gráfico de porcentaje de asistencia semanal acumulado.

[HUS-03-T3] Alertas Críticas C3 & Acceso C4 (Frontend | UI | Alta | 1.0h | Branch: dfaparicio)
Mostrar >3 fallas y botón de acceso rápido para toma de asistencia.


---

## 🌳 Estrategia de Ramas
- `main`: Código estable de producción.
- `andft`: Desarrollo de componentes Frontend y lógica cliente.
- `dfaparicio`: Desarrollo de Modelos, API y persistencia Backend.

---

## ✅ Estado de Ejecución Actual
- [x] Estructura base Backend/Frontend (ESM, Quasar, Vite).
- [x] Modelo de datos Usuario.js y conexión MongoDB.
- [x] Vistas funcionales: Login, Dashboard y Registro.
- [x] Persistencia local configurada.
- [x] Gitignore profesional.
- [x] [HUS-01-T2] Errores Genéricos y Recuperación (Completado).

