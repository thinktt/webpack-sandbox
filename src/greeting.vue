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
module.exports = {
  data: function() {
    return {
      greeting: 'Howdy!',
      show: true
    }
  },
  methods: {
    showGreeting: function() {
      this.show = !this.show; 
    }
  }
}
</script>

<style>
h1 {
  font-size: 100px;
}
  
</style>



