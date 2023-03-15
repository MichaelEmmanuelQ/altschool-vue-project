<template>
    <div class="counter">
    <div class="sub-counter">
      <h1>{{ state.count}}</h1>
      <div class="button-container">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="reset">Reset</button>
      </div>
      <div class="input-container">
        <input type="number" v-model="value" />
        <button @click="setValue(value)">Set Value</button>
      </div>
    </div>
    </div>
  </template>
  
  <script>
import useCounter from '@/composables/useCounter'

export default {
  setup() {
    const { state, increment, decrement, reset, setValue } = useCounter()
    let value = 0

    return {
      state,
      increment,
      decrement,
      reset,
      value,
      setValue,
    }
  },
}
</script>
  
  <style>
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 3rem;
    

  }

  .sub-counter {
   /* From https://css.glass */
background: rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
padding: 60px 70px;
  }
  
  .button-container {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
  }
  
  .input-container {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
  }
  
  input {
    margin-right: 1rem;
    width: 100px;
    padding: 0.5rem;
    font-size: 2rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    font-size: 2rem;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #457fca;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color:#5691c8;
  }
  </style>
  