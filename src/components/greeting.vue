<template>
  <div>
    <transition 
      appear 
      enter-active-class="animated bounceInDown" 
      leave-active-class="animated bounceOut"
      mode="out-in">
        <h1 v-if="show">{{greeting}}</h1>
    </transition>
    <button @click="showGreeting">Show Greeting</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      greeting: 'Howdy!!',
      show: true
    }
  },
  methods: {
    showGreeting: function() {
      this.show = !this.show; 
    }
  }
}

console.log("I'm in the template!")
</script>

<style local>
h1 {
  font-size: 25px;
}
  
</style>



