import './assets/style.css'
import Application from './Application.vue'
import { createApp } from 'vue'
import {COLUMN_WIDTH} from './constants.ts';

createApp(Application)
  .mount('#application')

document.documentElement
  .style.setProperty('--column-width', `${COLUMN_WIDTH}px`)
