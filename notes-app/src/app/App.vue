<template>
  <div id="mainContainer">
    <div class="notes-section">
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="note in notes" class="notes" v-bind:key="note">
            {{ note }}
          </div>
        </div>
        <div class="column has-text-centered">
          <strong>Timestamp</strong>
          <div v-for="timestamp in timestamps" class="timestamps" v-bind:key="timestamp">
            {{ timestamp }}
          </div>
        </div>
      </div>
      <input-component></input-component>
      <note-count-component></note-count-component>
    </div>
  </div>
</template>

<script>
import InputComponent from './components/InputComponent';
import NoteCountComponent from './components/NoteCountComponent';
import { EventBus } from './EventBus';

export default {
  name: 'app',
  computed: {
    notes() {
      return this.$store.getters.getNotes;
    },
    timestamps() {
      return this.$store.getters.getTimestamps;
    }
  },  
  components: {
    InputComponent,
    NoteCountComponent
  }
}
</script>
