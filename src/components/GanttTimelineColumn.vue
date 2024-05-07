<script setup lang="ts">
defineProps<{
  heading: string
}>()
</script>

<template>
  <div
    style="width: var(--column-width);"
    class="shrink-0 border-r border-r-slate-400 overflow-hidden"
  >
    <div class="flex items-center justify-center h-8 bg-slate-200">{{ heading }}</div>
    <div class="flex">
      <div v-for="i in 24" style="flex-shrink: 0; width: calc(72px/24); height: 100vh" :style="{backgroundColor: `${i % 2 === 0 ? '#fff' : '#e9e9e9'}`}"></div>
    </div>
  </div>
</template>