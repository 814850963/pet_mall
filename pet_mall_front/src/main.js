import { createApp } from 'vue'
import App from './App.vue'
import {mixin,mixin2} from './mixin'
//引入插件
import plugins from './plugins'

createApp(App).mount('#app')
createApp(App).use(plugins)
