// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';

// const Vue = require('vue');
// const App = require('./App');
// const router = require('./router');

// const VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
// 修改文件格式
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
