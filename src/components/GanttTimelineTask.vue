<script setup lang="ts">
import { type GantTask } from '../types.ts'
import { computed } from 'vue'
import dayjs from 'dayjs'
import data from '../data/index.ts'
import { HOURS_OFFSET } from '../constants.ts'

const props = defineProps<{
  task: GantTask
}>()

/**
 * Одни единица времени (в данном случае час), равна одному пикселю.
 * from - это количество часов/пикселей прошедших от timeline.from до task.from.
 * to - это количество часов/пикселей прошедших от timeline.from до task.to.
 *
 * Если бы ширина колонки была равна 24px/hours, то HOURS_OFFSET был бы не нужен.
 * Сейчас ширина колонки равна 72px/hours. 72 делим на 24px/hours и получаем множитель.
 */
const style = computed(() => {
  const from = dayjs(props.task.from)
    .diff(data.timeline.from, 'hour') * HOURS_OFFSET

  const to = dayjs(props.task.to)
    .diff(data.timeline.from, 'hour') * HOURS_OFFSET

  return {
    left: `${from}px`,
    width: `${to-from}px`
  }
})
</script>

<template>
  <article class="my-1 relative cursor-pointer" :style="style">
    <div class="flex bg-white p-2 rounded-lg">
      {{ task.label }}
    </div>
  </article>
</template>