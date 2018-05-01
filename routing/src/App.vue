<template>
  <div id="app">
    <div class="movies">
      <h2>Which movie?</h2>
      <a href="/dunkirk">/dunkirk</a>
      <a href="/interstellar">/interstellar</a>
      <a href="/the-dark-knight-rises">/the-dark-knight-rises</a>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import RouterView from './components/RouterView';
import IndexBlurb from './components/IndexBlurb';
import DunkirkBlurb from './components/DunkirkBlurb';
import InterstellarBlurb from './components/InterstellarBlurb';
import DarkKnightBlurb from './components/TheDarkKnightBlurb';

const routes = [
  { path: '/', component: IndexBlurb },
  { path: '/dunkirk', component: DunkirkBlurb },
  { path: '/interstellar', component: InterstellarBlurb },
  { path: '/the-dark-knight-rises', component: DarkKnightBlurb },
];

export default {
  name: 'App',
  components: {
    RouterView,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
