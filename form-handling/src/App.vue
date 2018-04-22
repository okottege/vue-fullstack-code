<template>
  <div id="app">
    <div class="ui-container">
      <h2 class="ui header">What's your favourite Fullstack clothing item?</h2>
      <button-row></button-row>
    </div>
  </div>
</template>

<script>
import ButtonRow from './components/ButtonRow';

export default {
  name: 'App',
  components: {
    ButtonRow,
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
