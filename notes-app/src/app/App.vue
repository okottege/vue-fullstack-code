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
      <input-component @add-note="addNote" :placeholder="placeholder"></input-component>
    </div>
  </div>
</template>

<script>
import InputComponent from './components/InputComponent';

export default {
  name: 'app',
  data () {
    return {
      notes: [],
      timestamps: [],
      placeholder: 'Enter a Note'
    };
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp)
    }
  },
  components: {
    InputComponent
  }
}
</script>
