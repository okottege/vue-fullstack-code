<template>
  <div id="app">
    <div class="ui-container">
      <h2 class="ui header">What's your favourite Fullstack clothing item?</h2>
      <button-row></button-row>
    </div>
    <div class="ui container">
      <h2 class="ui header">Fullstack clothing inquiry sheet</h2>
      <input-form></input-form>
    </div>
  </div>
</template>

<script>
import ButtonRow from './components/ButtonRow';
import InputForm from './components/InputForm';

export default {
  name: 'App',
  components: {
    ButtonRow,
    InputForm,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
