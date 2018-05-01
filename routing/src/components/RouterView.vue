<template>
  <component :is="currentView"></component>
</template>
<script>
import DunkirkBlurb from './DunkirkBlurb';

export default {
  name: 'router-view',
  data() {
    return {
      currentView: DunkirkBlurb,
    };
  }
};
</script>

