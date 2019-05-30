import Vue from 'vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
// Bootstrap vue setup
import BootstrapVue from 'bootstrap-vue';

// Import our scss
import './assets/scss/index.scss';

// Import font awesome
import './plugins/font-awesome';

import App from './App.vue';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
