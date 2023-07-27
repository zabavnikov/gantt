<template>
  <div ref="gantt" class="gantt"></div>
</template>

<script>
import { gantt } from 'dhtmlx-gantt'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'

export default {
  name: 'gantt',
  props: {
    tasks: {
      type: Object,
      default () {
        return {data: [], links: []}
      }
    }
  },

  mounted: function () {
    gantt.config.grid_resize = true;
    gantt.config.columns = [
      {name: "text", label: "Название задачи", tree: true, width: 160, template: function (task) {
          if (task.priority === 1) {
            return "<div class='important'>" + task.text + "</div>";
          }
          return task.text;
        }
      },
      {name: "start_date", label: "Время начала", align: "center", width: 120},
      {name: "duration", label: "Продолжительность", align: "center", width: 120}
    ]

    gantt.config.xml_date = "%Y-%m-%d";
    gantt.init(this.$refs.gantt);
    gantt.parse(this.tasks);
  }
}
</script>

<style>
html, body, .gantt {
  margin: 0;
  padding: 0;
}

html, body, #application, .gantt {
  height: 100%;
}
</style>