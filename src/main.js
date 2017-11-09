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

// var adminDiv = document.createElement('div')
// adminDiv.id = 'app'
// document.getElementsByTagName('body')[0].appendChild(adminDiv)

var body = document.body
var wrapper = document.createElement('span')
wrapper.id = 'adminViewFrame'

wrapper.innerHTML = body.innerHTML
body.innerHTML = wrapper.outerHTML

var div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)

var div2 = document.createElement('div')
div2.id = 'versionTag'
document.body.appendChild(div2)

var div3 = document.createElement('div')
div3.id = 'tabBar'
document.body.appendChild(div3)

var loadScript = (url, id = 'foo') => {
  var s = document.createElement('script')
  s.type = 'text/javascript'
  s.src = url
  s.id = id
  document.body.appendChild(s)
}
loadScript('/extras/yui/build/utilities/utilities.js')
loadScript('/extras/yui/build/element/element-debug.js')
loadScript('/extras/yui/build/json/json-debug.js')
loadScript('/extras/yui/build/tabview/tabview-debug.js')
loadScript('/extras/yui-webgui/build/i18n/i18n.js')
loadScript('/extras/admin/admin.js', 'adminScript')

// window.YAHOO.util.Event.onDOMReady(function () {
document.getElementById('adminScript').addEventListener('load', () => {
  window.admin = new window.WebGUI.Admin({
    homeUrl: '/home',
    assetTypes: {'37/64': null}
  })
  document.body.className = 'yui-skin-sam'
})

/* eslint-disable no-new */
window.adminBar = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
