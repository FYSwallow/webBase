import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import { registerMicroApps, start } from 'qiankun';
import microApps from './micro-app';

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

registerMicroApps(microApps);


start();
