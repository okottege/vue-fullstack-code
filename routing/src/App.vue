<template>
  <div id="app">
    <div class="movies">
      <h2>Which movie?</h2>
      <router-link to="/dunkirk">/dunkirk</router-link>
      <router-link to="/interstellar">/interstellar</router-link>
      <router-link to="/the-dark-knight-rises">/the-dark-knight-rises</router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>
