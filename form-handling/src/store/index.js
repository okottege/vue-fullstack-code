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
  UPDATE_EMAIL(currState, payload) {
    currState.fields.email = payload;
  },
  UPDATE_URGENCY(currState, payload) {
    currState.fields.urgency = payload;
  },
  UPDATE_TERMS_AND_CONDITIONS(currState, payload) {
    currState.fields.termsAndConditions = payload;
  },
  UPDATE_ITEMS(currState, payload) {
    currState.items = payload;
  },
  CLEAR_FIELDS(currState) {
    currState.fields.newItem = '';
    currState.fields.email = '';
    currState.fields.urgency = '';
    currState.fields.termsAndConditions = false;
  },
};
const actions = {};
const getters = {
  newItem: state => state.fields.newItem,
  newItemLength: state => state.fields.newItem.length,
  isNewItemInputLimitExceeded: state => state.fields.newItem.length >= 20,
  email: state => state.fields.email,
  urgency: state => state.fields.urgency,
  isNotUrgent: state => state.fields.urgency === 'Nonessential',
  termsAndConditions: state => state.fields.termsAndConditions,
  items: state => state.items,
};

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
