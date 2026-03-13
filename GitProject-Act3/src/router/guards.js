/**
 * GitProject #7 - Lógica de protección de rutas.
 * Estado: En Revisión
 */

export const authGuard = (to, from, next) => {
  const isAuthenticated = false; // Simulación
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
};
