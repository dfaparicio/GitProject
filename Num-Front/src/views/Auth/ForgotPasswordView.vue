<template>
  <q-page class="flex flex-center bg-gradient">
    <q-card class="bg-premium-glass q-pa-xl shadow-24" style="width: 100%; max-width: 450px; border-radius: 20px;">
      <q-card-section class="q-pb-none">
        <div class="row items-center q-mb-md">
          <q-btn flat round dense icon="arrow_back" color="primary" to="/login" />
          <h2 class="text-h5 text-bold text-navy q-ml-sm q-my-none">Recuperar Contraseña</h2>
        </div>
        <p class="text-subtitle1 text-grey-8 q-mb-lg">
          Ingresa tu correo institucional y te enviaremos las instrucciones de recuperación.
        </p>

        <!-- Mensaje de confirmación genérico: siempre muestra que se envió para no revelar correos -->
        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <q-banner v-if="emailSent" class="bg-positive text-white rounded-borders q-pa-md text-center">
            <q-icon name="check_circle" size="md" class="q-mb-sm" />
            <div>Si el correo existe en nuestro sistema, hemos enviado un enlace de recuperación. Por favor, revisa tu bandeja de entrada.</div>
            <q-btn flat no-caps color="white" label="Volver al Login" class="q-mt-sm" to="/login" />
          </q-banner>
        </transition>

        <q-form v-if="!emailSent" @submit="onRecover" class="q-gutter-md q-mt-lg">
          <q-input
            v-model.trim="email"
            label="Correo Institucional"
            outlined
            autofocus
            placeholder="usuario@sanjose.edu.co"
            :rules="[
              val => !!val || 'El correo es obligatorio',
              val => val.toLowerCase().endsWith('@sanjose.edu.co') || 'Debe ser un correo institucional'
            ]"
            bg-color="white"
          >
            <template v-slot:prepend>
              <q-icon name="email" color="primary" />
            </template>
          </q-input>

          <q-btn
            label="Enviar Instrucciones"
            type="submit"
            color="primary"
            class="full-width text-bold q-py-md q-mt-md"
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
const emailSent = ref(false)
const isLoading = ref(false)

const onRecover = async () => {
  isLoading.value = true
  
  try {
    // TODO: Implementar el POST a la API de Num-Back (ej. /api/auth/recover-password)
    // El backend debe enviar el correo Y NO DEVOLVER ERROR si el usuario no existe (prevenir user enumeration).
    
    // Simulación de llamada de red
    await new Promise(resolve => setTimeout(resolve, 1200))

  } finally {
    // IMPORTANTE: Siempre mostrar mensaje de éxito para cumplir con C3 (No revelar existencia)
    emailSent.value = true
    isLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(135deg, #003366 0%, #001a33 100%);
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
