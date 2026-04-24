<template>
  <q-page class="flex flex-center bg-grey-2 q-pa-md">
    <q-card class="full-width shadow-3" style="max-width: 500px; border-radius: 12px;">
      <q-card-section class="bg-primary text-white text-center q-py-lg">
        <div class="text-h5 text-weight-bold">Registro de Personal</div>
        <div class="text-subtitle2">HUS-02: Gestión de Docentes y Administrativos</div>
      </q-card-section>

      <q-separator />

      <q-card-section class="q-pa-xl">
        <q-form @submit="handleRegister" class="q-gutter-y-md">
          <!-- Nombre Completo -->
          <q-input
            v-model="form.nombre"
            label="Nombre completo"
            placeholder="Ej. Juan Pérez"
            outlined
            dense
            color="primary"
            :rules="[val => !!val || 'El nombre es obligatorio']"
            lazy-rules
          >
            <template v-slot:prepend><q-icon name="person" /></template>
          </q-input>

          <!-- Documento de Identidad -->
          <q-input
            v-model="form.documento"
            label="Documento de identidad"
            type="number"
            outlined
            dense
            color="primary"
            :rules="[
              val => !!val || 'El documento es obligatorio',
              val => val.length >= 5 || 'Mínimo 5 dígitos'
            ]"
            lazy-rules
          >
            <template v-slot:prepend><q-icon name="badge" /></template>
          </q-input>

          <!-- Correo Institucional -->
          <q-input
            v-model="form.email"
            label="Correo institucional"
            type="email"
            placeholder="usuario@institucion.edu"
            outlined
            dense
            color="primary"
            :rules="[
              val => !!val || 'El correo es obligatorio',
              val => /.+@.+\..+/.test(val) || 'Formato de correo inválido'
            ]"
            lazy-rules
          >
            <template v-slot:prepend><q-icon name="email" /></template>
          </q-input>

          <!-- Rol (Selector) -->
          <q-select
            v-model="form.rol"
            :options="rolOptions"
            label="Seleccione el Rol"
            outlined
            dense
            emit-value
            map-options
            color="primary"
            :rules="[val => !!val || 'Debe seleccionar un rol']"
            lazy-rules
          >
            <template v-slot:prepend><q-icon name="admin_panel_settings" /></template>
          </q-select>

          <!-- Contraseña -->
          <q-input
            v-model="form.password"
            label="Contraseña"
            :type="showPassword ? 'text' : 'password'"
            outlined
            dense
            color="primary"
            :rules="[
              val => !!val || 'La contraseña es obligatoria',
              val => val.length >= 6 || 'Mínimo 6 caracteres'
            ]"
            lazy-rules
          >
            <template v-slot:prepend><q-icon name="lock" /></template>
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility' : 'visibility_off'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>

          <!-- Botón de Acción -->
          <div class="q-mt-xl">
            <q-btn
              label="Registrar Usuario"
              type="submit"
              color="primary"
              class="full-width q-py-sm"
              unelevated
              rounded
              :loading="loading"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const loading = ref(false)
const showPassword = ref(false)

const form = reactive({
  nombre: '',
  documento: '',
  email: '',
  rol: null,
  password: ''
})

const rolOptions = [
  { label: 'Docente', value: 'Docente' },
  { label: 'Administrativo', value: 'Administrativo' }
]

const handleRegister = async () => {
  loading.value = true
  
  // Simulación de envío al backend
  setTimeout(() => {
    loading.value = false
    $q.notify({
      type: 'positive',
      message: 'Usuario registrado correctamente (Front-end validado)',
      position: 'top'
    })
    console.log('Datos enviados:', form)
  }, 1500)
}
</script>

<style scoped>
.q-card {
  transition: all 0.3s ease;
}
@media (max-width: 600px) {
  .q-card {
    box-shadow: none;
    background: transparent;
  }
}
</style>
