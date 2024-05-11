<script setup lang="ts">
defineProps<{
  heading: string
}>()
</script>

<template>
  <div
    style="width: var(--column-width);"
    class="shrink-0 border-r border-r-neutral-200/75 overflow-hidden min-h-screen"
  >
    <div class="flex items-center justify-center h-8 bg-neutral-100">{{ heading }}</div>
    <div class="flex">
      <div v-for="i in 24" style="flex-shrink: 0; width: calc(var(--column-width)/24); height: 100vh" :style="{backgroundColor: `${i % 2 === 0 ? '' : '#f7f7f7'}`}"></div>
    </div>
  </div>
</template>