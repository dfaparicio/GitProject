<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <!-- Sección Bienvenida -->
      <div class="col-12">
        <h1 class="text-h4 q-mb-md">Dashboard Docente</h1>
        <p class="text-subtitle1 text-grey-8">Bienvenido de nuevo al Control de Asistencia San José</p>
      </div>

      <!-- Alerta Crítica (HUS-03 C3) -->
      <div class="col-12">
        <q-banner dense inline-actions class="bg-red-2 text-red-9 rounded-borders">
          <template v-slot:avatar>
            <q-icon name="warning" color="red" />
          </template>
          <strong>Alertas Críticas:</strong> 5 estudiantes con más de 3 fallas consecutivas sin justificar.
          <template v-slot:action>
            <q-btn flat color="red" label="Ver Detalles" />
          </template>
        </q-banner>
      </div>

      <!-- Horario del Día (HUS-03 C1) -->
      <div class="col-12 col-md-8">
        <q-card flat bordered class="my-card">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Clases de Hoy</div>
          </q-card-section>

          <q-separator />

          <q-list separator>
            <q-item v-for="clase in clasesHoy" :key="clase.id" class="q-py-md">
              <q-item-section side>
                <q-badge :color="clase.activa ? 'positive' : 'grey'">{{ clase.hora }}</q-badge>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">{{ clase.materia }}</q-item-label>
                <q-item-label caption>{{ clase.grupo }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <!-- Acceso Directo (HUS-03 C4) -->
                <q-btn 
                  v-if="clase.activa" 
                  color="secondary" 
                  label="Tomar Asistencia" 
                  icon="check_circle" 
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <!-- Indicador Porcentaje Asistencia (HUS-03 C2) -->
      <div class="col-12 col-md-4">
        <q-card flat bordered class="text-center">
          <q-card-section class="bg-indigo-7 text-white">
            <div class="text-h6">Asistencia Semanal</div>
          </q-card-section>
          <q-card-section>
            <q-knob
              readonly
              v-model="porcentajeAsistencia"
              show-value
              size="150px"
              :thickness="0.22"
              color="indigo-7"
              track-color="indigo-1"
              class="text-indigo-7 q-ma-md"
            >
              {{ porcentajeAsistencia }}%
            </q-knob>
            <p class="text-caption text-grey-8">Cumplimiento acumulado de sus grupos</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const porcentajeAsistencia = ref(92);

const clasesHoy = ref([
  { id: 1, hora: '07:00 AM', materia: 'Matemáticas', grupo: '9-A', activa: false },
  { id: 2, hora: '09:30 AM', materia: 'Cálculo', grupo: '11-B', activa: true },
  { id: 3, hora: '11:00 AM', materia: 'Geometría', grupo: '8-C', activa: false }
]);
</script>

<style scoped>
.my-card {
  width: 100%;
}
</style>
