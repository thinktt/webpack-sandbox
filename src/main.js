import Vue from 'vue';
import greeting from 'components/greeting.vue';
import  salutation from 'components/salutation.vue'; 
import notFound from 'components/not-found.vue'; 
import VueRouter from 'vue-router';

Vue.use(VueRouter);


const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: greeting},
    {path: '/salutation', component: salutation},
    {path: '*', component: notFound},
  ]
});

new Vue({
  el: '#app',
  router: router
});







