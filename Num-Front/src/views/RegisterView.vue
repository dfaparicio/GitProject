<template>
  <q-page class="flex flex-center">
    <q-card style="width: 500px; padding: 20px;">
      <q-card-section>
        <div class="text-h6">Registro de Nuevos Usuarios (Admin)</div>
        <p class="text-caption">HUS-02: Registrar docentes y personal administrativo</p>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="handleRegister">
          <q-input
            v-model="form.nombreCompleto"
            label="Nombre Completo"
            outlined
            :rules="[val => !!val || 'El nombre es obligatorio']"
            class="q-mb-sm"
          />

          <q-input
            v-model="form.documentoIdentidad"
            label="Documento de Identidad"
            outlined
            :rules="[val => !!val || 'El documento es obligatorio']"
            class="q-mb-sm"
          />

          <q-input
            v-model="form.correoInstitucional"
            label="Correo Institucional"
            outlined
            :rules="[
              val => !!val || 'El correo es obligatorio',
              val => val.endsWith('@sanjose.edu.co') || 'Debe ser @sanjose.edu.co'
            ]"
            class="q-mb-sm"
          />

          <q-select
            v-model="form.rol"
            :options="['Docente', 'Admin']"
            label="Rol del Usuario"
            outlined
            class="q-mb-sm"
            :rules="[val => !!val || 'El rol es obligatorio']"
          />

          <q-input
            v-model="form.password"
            label="Contraseña"
            type="password"
            outlined
            :rules="[
              val => !!val || 'La contraseña es obligatoria',
              val => /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val) || 
                     'Mín 8 caracteres, 1 mayúscula, 1 número y 1 especial'
            ]"
            class="q-mb-md"
          />

          <q-btn
            label="Registrar Usuario"
            color="primary"
            type="submit"
            class="full-width"
            :loading="loading"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const loading = ref(false);

const form = ref({
  nombreCompleto: '',
  documentoIdentidad: '',
  correoInstitucional: '',
  rol: 'Docente',
  password: ''
});

const handleRegister = async () => {
  loading.value = true;
  try {
    // Simulación exitosa (C4: Correo de bienvenida enviado)
    $q.notify({
      type: 'positive',
      message: 'Usuario registrado. Correo de bienvenida enviado automáticamente.'
    });
    
    // Resetear formulario
    form.value = {
      nombreCompleto: '',
      documentoIdentidad: '',
      correoInstitucional: '',
      rol: 'Docente',
      password: ''
    };
    
  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'El correo o documento ya existen.'
    });
  } finally {
    loading.value = false;
  }
};
</script>
