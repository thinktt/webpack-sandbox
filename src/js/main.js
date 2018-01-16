import Vue from 'vue';
import greeting from 'components/greeting';
//const Vue = require('vue').default;
//const greeting = require('components/greeting.vue').default;

new Vue({
  el: '#app',
  data: {
    greeting: 'Oh hi Mark',
  }
});

new Vue({
  el: '#greeting',
  render: h => h(greeting)
})





