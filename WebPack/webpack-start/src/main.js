const {add, mul} = require('./js/mathUtil.js')

console.log('ccc');
console.log(add(1, 2));
console.log(mul(3, 2));

//依赖css
require('./css/normal.css')
require('./css/special.less')

import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  data: {
    message: 'hello main'
  },
  template: '<App></App>',
  components: {
    App,
  }
})