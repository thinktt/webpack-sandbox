<template>
  <div class="greeting">
    <transition 
      appear 
      enter-active-class="animated bounceInDown" 
      mode="out-in">
        <div class="not-found-message"> 
          <h1>404</h1>
          <h3>Sorry, we couldn't find this page</h3>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  data: function() {},
  methods: {},
}

</script>

<style>

.not-found-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
}

.greeting {
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 20rem;
  background-color: antiquewhite;
  margin: 5rem;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.greeting h1 {
  font-size: 10rem;
  margin: 0; 
}
.greeting h3 {
  margin-top: 0;
}
  
</style>



