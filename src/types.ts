export type Timeline = {
  from: string,
  to: string,
}

export type Gantt = {
  timeline: Timeline,
}

export type GantTask = {
  label: string
  from: string
  to: string
}