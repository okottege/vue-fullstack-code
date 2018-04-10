import Vue from 'vue';
import Vuex from 'vuex';
import App from './app/App.vue';

const state = {
  notes: [],
  timestamps: []
};

const mutations = {
  ADD_NOTE(state, payload) {
    let newNote = payload;
    state.notes.push(newNote);
  },
  ADD_TIMESTAMP(state, payload) {
    let newTimestamp = payload;
    state.timestamps.push(newTimestamp);
  }
};

const actions = {
  addNote(context, payload) {
    context.commit('ADD_NOTE', payload);
  },
  addTimestamp(context, payload) {
    context.commit('ADD_TIMESTAMP', payload);
  }
};

const getters = {
  getNotes: state => state.notes,
  getTimestamps: state => state.timestamps,
  getNoteCount: state => state.notes.length
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
