<template>
  <div class="input-form">
    <form @submit="submitForm" class="ui form">
      <div class="field">
        <input v-model="newItem" type="text" placeholder="Add an item!" />
      </div>
      <button class="ui button">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "InputForm",
  data() {
    return {
      newItem: '',
      items: [],
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log(this.newItem);
    },
  }
}
</script>
