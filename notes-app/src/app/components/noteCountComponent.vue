<template>
  <div class="note-count">Note count: <strong>{{ noteCount }}</strong></div>
</template>
<script>
import { EventBus } from '../EventBus';

export default {
  data() {
      return {
          noteCount: 0
      };
  },
  created() {
      EventBus.$on('add-note', event => this.noteCount++);
  }
}
</script>

