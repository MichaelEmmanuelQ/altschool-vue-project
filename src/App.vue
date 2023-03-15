<template>
  <p class="altschool"> Altschool FrontEnd Engineering Third Semester Examination Project by: </p>
  <p class="myName">michael adeniyi emmanuel</p>
  <Counter msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Counter from './components/CounterButton.vue'

export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fcfcfc;
  margin-top: 60px;
  
}
body {
  margin: 0;
  padding: 0;
  background: #c2e59c;  
  background: -webkit-linear-gradient(to right, #64b3f4, #c2e59c);  
  background: linear-gradient(to right, #64b3f4, #c2e59c); 
}

.altschool {
  padding-top: 40px;
  font-size: 2rem;
}

.myName {
  font-size: 1rem;
 text-transform: uppercase;
}
</style>
