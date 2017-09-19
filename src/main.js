// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import 'vue-awesome/icons/arrows'
import 'vue-awesome/icons/cog'
import 'vue-awesome/icons/plus'

import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)

import VModal from 'vue-js-modal'
Vue.use(VModal)

/* eslint-disable no-new */
window.admin = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
