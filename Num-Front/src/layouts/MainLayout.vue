<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          Colegio San José - Asistencia
        </q-toolbar-title>
        <q-btn flat round dense icon="account_circle">
          <q-menu>
            <q-list style="min-width: 150px">
              <q-item clickable v-close-popup @click="logout">
                <q-item-section>Cerrar Sesión</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Navegación</q-item-label>
        
        <q-item clickable to="/dashboard" exact>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable to="/registro" exact>
          <q-item-section avatar>
            <q-icon name="person_add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Registro Usuarios</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable @click="notifyNotImplemented">
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Estudiantes</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

const leftDrawerOpen = ref(false);
const router = useRouter();
const $q = useQuasar();

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const logout = () => {
  // Eliminar sesión de localStorage
  localStorage.removeItem('user_session');
  $q.notify({
    message: 'Sesión cerrada exitosamente',
    color: 'info'
  });
  router.push('/');
};

const notifyNotImplemented = () => {
  $q.notify({
    message: 'Esta funcionalidad estará disponible pronto.',
    color: 'info'
  });
};
</script>
