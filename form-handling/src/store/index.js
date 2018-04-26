import Vue from 'vue';
import Vuex from 'vuex';

const state = {
  fields: {
    newItem: '',
    email: '',
    urgency: '',
    termsAndConditions: false,
  },
  items: [],
};
const mutations = {
  UPDATE_NEW_ITEM(currState, payload) {
    currState.fields.newItem = payload;
  },

};
const actions = {};
const getters = {};

Vue.use(Vuex);

const apiClient = {
  count: 1,
  loadItems: () => (
    {
      then: (cb) => {
        setTimeout(() => cb(JSON.parse(localStorage.items || [])), 1000);
      },
    }
  ),
  saveItems: (items) => {
    /* eslint-disable no-plusplus  */
    const success = !!(this.count++ % 2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!success) return reject({ success });

        localStorage.items = JSON.stringify(items);
        return resolve({ success });
      }, 1000);
    });
  },
};

export default new Vuex({
  state,
  mutations,
  actions,
  getters,
});
