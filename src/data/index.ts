import { Gantt } from '../types.ts'

/**
 *
 */
export default {
  timeline: {
    from: 'Sun, 31 Dec 2023 17:00:00 GMT',
    to: 'Tue, 31 Dec 2024 16:59:59 GMT',
  },
  tasks: [
    {
      label: 'Построить дом',
      from: 'Sun, 12 Jan 2024 03:00:00',
      to: 'Tue, 22 Jan 2024 16:59:59',
      tasks: [],
    },
    {
      label: 'Посадить дерево',
      from: 'Sun, 2 Jan 2024 17:00:00',
      to: 'Tue, 12 Jan 2024 16:59:59',
      tasks: [],
    },
  ],
} as Gantt