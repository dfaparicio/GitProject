<template>
  <q-page class="flex flex-center">
    <q-card style="width: 300px">
      <q-card-section>
        <div class="text-h6">Login</div>
      </q-card-section>
      <q-card-section>
        <q-input v-model="email" label="Email" />
        <q-input v-model="password" type="password" label="Password" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Login" color="primary" @click="handleLogin" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

// GitProject #2 - HU: Login de Usuarios (8h, Desarrollo, Alta).
// Responsable: dfaparicio
// Estado: En Proceso

const email = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Login intentado con:', email.value);
};
</script>
