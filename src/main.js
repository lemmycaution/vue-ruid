import Vue from 'vue';
import App from './App.vue';
import Ruid from './entry.js';

Vue.use(Ruid);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
