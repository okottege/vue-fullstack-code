<template>
  <div id="app">
    <div class="movies">
      <h2>Which movie?</h2>
      <router-link to="/dunkirk"></router-link>
      <router-link to="/interstellar"></router-link>
      <router-link to="/the-dark-knight-rises"></router-link>
      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RouterView from './components/RouterView';
import RouterLink from './components/RouterLink';

export default {
  name: 'App',
  components: {
    RouterView,
    RouterLink,
  },
};
</script>
