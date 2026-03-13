<template>
  <q-page class="flex flex-center">
    <!-- Formulario de Registro -->
    <q-card style="width: 300px">
      <q-card-section>
        <div class="text-h6">Registro</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="name" label="Nombre" />
        <q-input v-model="email" label="Email" />
        <q-input v-model="password" type="password" label="Password" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Registrar" color="secondary" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

// GitProject #3 - HU: Registro de Nuevos Usuarios (8h, Desarrollo, Alta).
// Responsable: andft
// Estado: Pendiente

const name = ref('');
const email = ref('');
const password = ref('');
</script>
