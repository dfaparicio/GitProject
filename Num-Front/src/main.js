import { createApp } from 'vue';
import { Quasar, Notify } from 'quasar';
import router from './router';

// Import Quasar css
import 'quasar/dist/quasar.css';
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

import App from './App.vue';

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {
    Notify
  }
});

myApp.use(router);

myApp.mount('#app');
