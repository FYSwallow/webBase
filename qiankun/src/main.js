import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start, runAfterFirstMounted } from 'qiankun';
import microApps from './micro-app';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

registerMicroApps(microApps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  ],
});


// 第一个子应用加载完毕后回调
runAfterFirstMounted(() => {
  console.log('第一个子应用加载完毕后的回调');
})

start();
