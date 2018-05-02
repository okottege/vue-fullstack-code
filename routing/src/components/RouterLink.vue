<template>
  <a @click="navigate" :href="to">{{ to }} </a>
</template>
<script>

import { EventBus } from '../EventBus';

export default {
  name: 'router-link',
  props: {
      to: {
          type: String,
          required: true,
      }
  },
  methods: {
      navigate(e) {
          e.preventDefault();
          window.history.pushState(null, null, this.to);
          EventBus.$emit('navigate');
      }
  }
};
</script>
