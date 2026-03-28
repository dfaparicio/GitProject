<template>
  <q-page class="flex flex-center bg-gradient">
    <q-card class="bg-premium-glass q-pa-lg shadow-24" style="width: 100%; max-width: 420px; border-radius: 20px;">
      <q-card-section class="text-center q-pb-none">
        <div class="q-mb-md">
          <q-avatar size="100px" font-size="52px" color="white" text-color="primary" class="shadow-5">
            <q-img src="../../assets/logo-sanjose.png" v-if="hasLogo" />
            <q-icon name="school" v-else />
          </q-avatar>
        </div>
        <h1 class="text-h4 text-bold text-navy q-my-sm">Academia San José</h1>
      </q-card-section>

      <q-card-section>
        <!-- Mensaje de error genérico (C2) -->
        <q-banner v-if="loginError" dense class="bg-negative text-white q-mb-md rounded-borders">
          <template v-slot:avatar>
            <q-icon name="warning" />
          </template>
          Usuario o contraseña incorrectos
        </q-banner>

        <q-form @submit="onLogin" class="q-gutter-md">
          <q-input
            v-model="email"
            label="Correo Institucional"
            outlined
            placeholder="usuario@sanjose.edu.co"
            :rules="[
              val => !!val || 'El correo es obligatorio',
              val => isInstitutional(val) || 'Debe usar su correo @sanjose.edu.co'
            ]"
            bg-color="white"
            round
          >
            <template v-slot:prepend>
              <q-icon name="email" color="primary" />
            </template>
          </q-input>

          <q-input
            v-model="password"
            label="Contraseña"
            type="password"
            outlined
            :rules="[val => !!val || 'La contraseña es obligatoria']"
            bg-color="white"
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="primary" />
            </template>
          </q-input>

          <!-- Enlace de recuperación de contraseña (C3) -->
          <div class="row justify-between items-center q-mt-sm">
            <q-btn flat no-caps color="primary" label="¿Olvidaste tu contraseña?" class="text-caption" to="/recuperar" />
          </div>

          <q-btn
            label="Ingresar al Sistema"
            type="submit"
            color="primary"
            class="full-width text-bold q-py-md shadow-2"
            rounded
            unelevated
            :loading="isLoading"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const hasLogo = ref(true)
const loginError = ref(false)
const isLoading = ref(false)

const isInstitutional = (val) => {
  return val.endsWith('@sanjose.edu.co')
}

const onLogin = async () => {
  isLoading.value = true;
  loginError.value = false;
  
  try {
    // TODO: Falta la llamada a la API para hacer el login real.
    // Simulación de error (credentials erróneas):
    if (email.value !== 'admin@sanjose.edu.co' || password.value !== '123456') {
      throw new Error('Invalid credentials');
    }
    
    // Si el login es exitoso:
    console.log("Login exitoso");
    // TODO: Falta redirigir al Dashboard
    
  } catch (error) {
    // Se muestra el error genérico sin dar detalles (C2)
    loginError.value = true;
  } finally {
    isLoading.value = false;
  }
}
</script>

<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(135deg, #003366 0%, #001a33 100%);
  position: relative;
  overflow: hidden;
}
.bg-premium-glass {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border: 4px solid #FFD700;
}
.text-navy {
  color: #003366;
}
</style>
