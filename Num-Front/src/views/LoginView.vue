<template>
  <div class="login-container flex flex-center">
    <q-card style="width: 400px; padding: 20px;">
      <q-card-section class="text-center">
        <h2 class="text-h5 q-mb-md">Acceso Colegio San José</h2>
        <p class="text-subtitle2 text-grey-7">Control de Asistencia</p>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="handleLogin">
          <q-input
            v-model="email"
            label="Correo Institucional"
            type="email"
            outlined
            :rules="[
              val => !!val || 'El correo es obligatorio',
              val => val.endsWith('@sanjose.edu.co') || 'Debe ser correo institucional @sanjose.edu.co'
            ]"
            class="q-mb-md"
          />

          <q-input
            v-model="password"
            label="Contraseña"
            type="password"
            outlined
            :rules="[val => !!val || 'La contraseña es obligatoria']"
            class="q-mb-md"
          />

          <q-btn
            label="Iniciar Sesión"
            color="primary"
            class="full-width q-mt-md"
            type="submit"
            :loading="loading"
          />
        </q-form>
      </q-card-section>

      <q-card-section class="text-center">
        <a href="#" class="text-primary text-caption">¿Olvidó su contraseña?</a>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const email = ref('');
const password = ref('');
const loading = ref(false);
const router = useRouter();
const $q = useQuasar();

const handleLogin = async () => {
  loading.value = true;
  try {
    // Simulación de validación (HUS-01)
    if (email.value === 'admin@sanjose.edu.co' && password.value === 'Admin123!') {
      const userData = {
        email: email.value,
        nombre: 'Admin San José',
        rol: 'Admin',
        token: 'simulated-jwt-token'
      };
      
      // Guardar en localStorage para persistencia funcional
      localStorage.setItem('user_session', JSON.stringify(userData));
      
      $q.notify({
        type: 'positive',
        message: 'Acceso concedido. ¡Bienvenido!'
      });
      router.push('/dashboard');
    } else {
      throw new Error('Usuario o contraseña incorrectos');
    }
    
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: error.message || 'Error de conexión'
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  background: #f4f7f6;
}
</style>
