<template>
  <div>
    <button @click="onButtonClick"
      name="button-hoodie" value="fullstack-hoodie" class="ui button">Hoodie</button>
    <button @click="onButtonClick"
      name="button-tee" value="fullstack-tee" class="ui button">Tee</button>
    <button @click="onButtonClick"
      name="button-fitted-cap" value="fullstack-fitted-cap" class="ui button">Fitted Cap</button>
    <button @click="onButtonClick"
      name="button-jacket" value="fullstack-jacket" class="ui button">Jacket</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonRow',
  methods: {
    onButtonClick(e) {
      const button = e.target;
      console.log(`The user clicked ${button.name}: ${button.value}`);
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
