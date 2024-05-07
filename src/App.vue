<script setup lang="ts">
import Gantt from './components/Gantt.vue'
import data from './data/index.ts'
</script>

<template>
  <Gantt :data="data" />
</template>