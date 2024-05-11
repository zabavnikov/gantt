<script setup lang="ts">
import { type GantTask } from '../types.ts'
import { computed } from 'vue'
import dayjs from 'dayjs'
import data from '../data/index.ts'
import { HOURS_OFFSET } from '../constants.ts'
import { Settings2Icon } from 'lucide-vue-next'

const props = defineProps<{
  task: GantTask
}>()

const PX = 'hour'

/**
 * Одни единица времени (в данном случае час), равна одному пикселю.
 * from - это количество часов/пикселей прошедших от timeline.from до task.from.
 * to - это количество часов/пикселей прошедших от timeline.from до task.to.
 *
 * Если бы ширина колонки была равна 24px/hours, то HOURS_OFFSET был бы не нужен.
 * Сейчас ширина колонки равна 72px/hours. 72 делим на 24px/hours и получаем множитель.
 */
const startAt = computed(() => {
  return dayjs(props.task.start_at)
    .diff(data.timeline.from, PX) * HOURS_OFFSET
})
const deadlineAt = computed(() => {
  return dayjs(props.task.deadline_at)
    .diff(data.timeline.from, PX) * HOURS_OFFSET
})

/**
 * Если completed_at отсутствует, то берем текущею дату.
 * Сравниваем сколько PX прошло с start_at до completed_at/текущая дата.
 */
const completedAt = computed(() => {
  return dayjs(props.task.completed_at ?? dayjs())
    .diff(props.task.start_at, PX) * HOURS_OFFSET
})

const style = computed(() => {
  return {
    left: `${startAt.value}px`,
    width: `${deadlineAt.value-startAt.value}px`
  }
})

/**
 * Задача считается просроченной,
 * если дата завершения больше чем дата дедлайна.
 */
const isOverdue = computed(() => {
  return completedAt.value > deadlineAt.value
})
</script>

<template>
  <div class="[&:not(:first-child)]:-mt-3 py-3 w-full hover:bg-indigo-200/25">
    <article
      class="relative"
      :style="style"
    >
      <div class="relative z-10 flex items-center cursor-pointer">
        <div class="flex-auto flex items-center px-4 h-12 bg-indigo-500 rounded-l-lg">
          <p class="text-white text-base">{{ task.label }}</p>
        </div>
        <div class="h-0 w-0 border-y-[24px] border-y-transparent border-l-[12px] border-l-indigo-500"></div>
      </div>

      <div
        v-if="isOverdue"
        class="absolute left-0 top-0 h-full bg-red-500/25 rounded-lg"
        :style="{ width: `${completedAt}px`}"
      >
      </div>
    </article>
  </div>
</template>