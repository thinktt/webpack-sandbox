const Vue = require('vue').default;
const greeting = require('./greeting.vue').default;

new Vue({
  el: '#app',
  data: {
    greeting: 'Oh hi Mark',
  }
});

console.log(greeting);

new Vue({
  el: '#greeting',
  render: h => h(greeting)
})





