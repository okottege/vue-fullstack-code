<template>
    <input
      :placeholder="placeholder"
      class="input is-small"
      type="text"
      v-model="input"
      @keyup.enter="monitorEnterKey" />
</template>

<script>
export default {
  name: 'InputComponent',
  props: ['placeholder'],
  data() {
    return {
      input: ''
    };
  },
  methods: {
    monitorEnterKey() {
      this.$emit('add-note', {
        note: this.input,
        timestamp: new Date().toLocaleString()
      });
      this.input = '';
    }
  }
}
</script>

