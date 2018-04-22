<template>
  <div>
    <button @click="onHoodieClick" class="ui button">Hoodie</button>
    <button @click="onTeeClick" class="ui button">Tee</button>
    <button @click="onFittedCapClick" class="ui button">Fitted Cap</button>
    <button @click="onJacketClick" class="ui button">Jacket</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonRow',
  methods: {
    onHoodieClick(e) {
      console.log('The user clicked button-hoodie', e);
    },
    onTeeClick(e) {
      console.log('The user clicked button-tee', e);
    },
    onFittedCapClick(e) {
      console.log('The user clicked button-fitted-cap', e);
    },
    onJacketClick(e) {
      console.log('The user clicked button-jacked', e);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
