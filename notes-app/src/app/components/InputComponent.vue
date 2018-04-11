<template>
    <input
      placeholder="Enter a note"
      class="input is-small"
      type="text"
      v-model="input"
      @keyup.enter="monitorEnterKey" />
</template>

<script>
export default {
  name: 'InputComponent',
  data() {
    return {
      input: ''
    }
  },
  methods: {
    monitorEnterKey() {
      this.$store.dispatch('addNote', this.input);
      this.$store.dispatch('addTimestamp', new Date().toLocaleString());
      this.input = '';
    }
  }
}
</script>

