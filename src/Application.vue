<template>
  <Gantt :tasks="tasks" />
</template>

<script setup lang="ts">
import Gantt from './components/Gantt.vue'

const tasks = {
  data: [
    {id: 1, text: 'Моя первая задача', start_date: '2020-01-17', duration: 3, progress: 0.6},
    {id: 2, text: 'Моя вторая задача', start_date: '2020-01-20', duration: 3, progress: 0.4}
  ],
  links: [
    {id: 1, source: 1, target: 2, type: '0'}
  ]
}
</script>
