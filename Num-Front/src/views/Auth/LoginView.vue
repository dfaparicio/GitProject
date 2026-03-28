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
        <p class="text-subtitle2 text-grey-8">Portal de Docentes y Administrativos</p>
      </q-card-section>

      <q-card-section>
        <!-- Mensaje de error genérico -->
        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <q-banner v-if="hasError" class="bg-negative text-white q-mb-md rounded-borders text-center">
            <q-icon name="error" size="sm" class="q-mr-sm" />
            Usuario o contraseña incorrectos
          </q-banner>
        </transition>

        <q-form @submit="onLogin" class="q-gutter-md">
          <q-input
            v-model.trim="email"
            label="Correo Institucional"
            outlined
            autofocus
            placeholder="usuario@sanjose.edu.co"
            :rules="[
              val => !!val || 'El correo es obligatorio',
              val => isValidEmail(val) || 'Formato de correo inválido',
              val => isInstitutional(val) || 'Debe usar su correo @sanjose.edu.co'
            ]"
            bg-color="white"
            round
            @update:model-value="hasError = false"
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
            @update:model-value="hasError = false"
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="primary" />
            </template>
          </q-input>

          <div class="row justify-between items-center q-mt-sm">
            <q-btn flat no-caps color="primary" label="¿Olvidaste tu contraseña?" class="text-caption" to="/forgot-password" />
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
      
      <q-card-section class="text-center q-pt-none">
        <p class="text-caption text-grey-7">
          &copy; 2026 Colegio San José - Gestión Académica
        </p>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const hasError = ref(false)
const isLoading = ref(false)
const hasLogo = ref(true)

const isValidEmail = (val) => {
  const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailPattern.test(val)
}

const isInstitutional = (val) => val.endsWith('@sanjose.edu.co')

const onLogin = async () => {
  isLoading.value = true
  hasError.value = false
  
  try {
    // TODO: Implementar la llamada al servicio de autenticación del backend (Num-Back)
    // Ejemplo: const response = await authService.login(email.value, password.value)
    
    // Simulando una llamada al backend que devuelve un error de credenciales
    await new Promise(resolve => setTimeout(resolve, 1500))
    throw new Error('Credenciales inválidas')
    
  } catch (error) {
    // C2: Mostrar mensaje genérico sin revelar si el correo existe
    hasError.value = true
  } finally {
    isLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(135deg, #003366 0%, #001a33 100%);
  position: relative;
  overflow: hidden;
}

.bg-gradient::before {
  content: '';
  position: absolute;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
  top: -25%;
  left: -25%;
}

.bg-premium-glass {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  border: 4px solid #FFD700; // Gold border for institutional feel
}

.text-navy {
  color: #003366;
}
</style>
