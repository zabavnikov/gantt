<script setup lang="ts">
import GanttTimeline from './GanttTimeline.vue'
import GanttTimelineTask from './GanttTimelineTask.vue'
import { type Gantt } from '../types.ts'
import { ref, watch } from 'vue'
import { useMouseInElement } from '@vueuse/core'

defineProps<{
  data: Gantt
}>()

const draggable = ref()
const selected = ref(false)
const { elementX, isOutside } = useMouseInElement(draggable)

watch(() => elementX.value, (x) => {
  if (selected.value) {
    (draggable.value as HTMLElement).scrollLeft = x
  }
})
</script>

<template>
  <div class="flex">
    <aside class="sticky left-0 z-[200] bg-white shrink-0 w-80">
      <header>
        <div class="h-14 bg-neutral-200">1</div>
        <div class="h-8 bg-slate-300">2</div>
      </header>
    </aside>
    <div class="relative overflow-x-scroll" ref="draggable" @mousedown="selected = true" @mouseup="selected = false">
      <GanttTimeline
        :from="data.timeline.from"
        :to="data.timeline.to"
      />
      <div class="absolute top-[88px] left-0 bottom-0 right-0 z-[100]">
        <GanttTimelineTask v-for="task in data.tasks" :task="task" />
      </div>
    </div>
  </div>
</template>