<script setup lang="ts">
import GanttTimelineColumn from './GanttTimelineColumn.vue'
import dayjs from 'dayjs'
import useDateRange from '../composables/useDateRange.ts'
import { DATE_UNITS } from '../constants.ts'
import { computed } from 'vue'
import { type Dayjs } from 'dayjs'
import { selectedDateTimeUnit } from '../store.ts'

const props = defineProps<{
  from: string,
  to: string
}>()

const dateTimeUnit = computed<Dayjs[]>(() => {
  // Генерируем диапазон единиц времени от from до to.
  const units = useDateRange(
    dayjs(props.from),
    dayjs(props.to),
    selectedDateTimeUnit.value,
  )

  // Для каждой единицы времени, генерируем массив дочерних единиц времени.
  // Если родительская единица равна month, то дочерняя единица будет равна day.
  return units.map((date) => {
    return {
      label: dayjs(date).format('MMMM'),
      items: useDateRange(
        dayjs(date).startOf(selectedDateTimeUnit.value),
        dayjs(date).endOf(selectedDateTimeUnit.value),
        DATE_UNITS[selectedDateTimeUnit.value],
      )
    }
  })
})
</script>

<template>
  <div class="flex">
    <div v-for="date in dateTimeUnit" class="flex flex-col">
      <div class="shrink-0 flex items-center h-14 px-4">{{ date.label }}</div>
      <div class="flex">
        <GanttTimelineColumn
          v-for="date in date.items"
          :key="date"
          :heading="dayjs(date).format('DD')"
        />
      </div>
    </div>
  </div>
</template>