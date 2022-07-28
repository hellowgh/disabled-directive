import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import directives from '@/directives'

createApp(App).use(ElementPlus).use(directives).mount('#app')
