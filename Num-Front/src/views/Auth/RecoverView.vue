<template>
  <q-page class="flex flex-center bg-gradient">
    <q-card class="bg-premium-glass q-pa-lg shadow-24" style="width: 100%; max-width: 420px; border-radius: 20px;">
      <q-card-section class="text-center">
        <q-icon name="lock_reset" size="64px" color="primary" />
        <h2 class="text-h5 text-bold text-navy q-my-md">Recuperar Contraseña</h2>
        <p class="text-subtitle2 text-grey-8">
          Ingresa tu correo institucional y te enviaremos instrucciones.
        </p>
      </q-card-section>

      <q-card-section>
        <q-banner v-if="successMessage" dense class="bg-positive text-white q-mb-md rounded-borders">
          Si el correo existe en nuestro sistema, recibirás un enlace de recuperación.
        </q-banner>

        <q-form @submit="onRecover" class="q-gutter-md" v-if="!successMessage">
          <q-input
            v-model="email"
            label="Correo Institucional"
            outlined
            placeholder="usuario@sanjose.edu.co"
            :rules="[val => !!val || 'El correo es obligatorio']"
            bg-color="white"
          >
            <template v-slot:prepend>
              <q-icon name="email" color="primary" />
            </template>
          </q-input>

          <q-btn
            label="Enviar enlace"
            type="submit"
            color="primary"
            class="full-width text-bold q-py-md shadow-2"
            rounded
            unelevated
            :loading="isLoading"
          />
        </q-form>

        <div class="row justify-center q-mt-md">
          <q-btn flat no-caps color="primary" label="Volver al Login" to="/login" />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const successMessage = ref(false)
const isLoading = ref(false)

const onRecover = async () => {
  isLoading.value = true;
  
  try {
    // TODO: Falta integrar API real de recuperación (backend endpoint).
    console.log('Enviando petición de recuperación a:', email.value)
    
  } catch (error) {
    console.error('Error al recuperar:', error)
  } finally {
    isLoading.value = false;
    // Siempre mostrar éxito por seguridad, sin importar si existe o no (C3)
    successMessage.value = true;
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
