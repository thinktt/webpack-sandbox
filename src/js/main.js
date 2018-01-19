import Vue from 'vue';
import greeting from 'components/greeting.vue';
import  salutation from 'components/salutation.vue'; 
import VueRouter from 'vue-router';
//const Vue = require('vue').default;
//const greeting = require('components/greeting.vue').default;

Vue.use(VueRouter);


const router = new VueRouter({
  //mode: 'history',
  routes: [
    {path: '/', component: greeting},
    {path: '/salutation', component: salutation},
  ]
});

new Vue({
  el: '#app',
  router: router
});


// new Vue({
//   el: '#app',
//   data: {
//     greeting: 'Oh hi Mark',
//   }
// });

// new Vue({
//   el: '#greeting',
//   render: h => h(greeting)
// })





