<template>
  <div class="input-form">
    <form @submit="submitForm" class="ui form">
      <div class="field">
        <label>New Item</label>
        <input :value="newItem" @input="onInputChange"
          name="NEW_ITEM" type="text" placeholder="Add an item!" />
        <span style="float:right">{{ fields.newItem.length }} / 20</span>
        <span style="color:red">{{ fieldErrors.newItem }} </span>
        <span style="color:red; display:block" v-if="isNewItemInputLimitExceeded">
          Must be under <b>twenty</b> characters
        </span>
      </div>
      <div class="field">
        <label>Email</label>
        <input :value="email" @input="onInputChange"
          name="EMAIL" type="text" placeholder="What's your email?" />
        <span style="color:red">{{ fieldErrors.email }} </span>
      </div>
      <div class="field">
        <label>Urgency</label>
        <select :value="urgency" @change="onInputChange"
          name="URGENCY" class="ui fluid search dropdown">
          <option disabled value="">Please select one</option>
          <option>Nonessential</option>
          <option>Moderate</option>
          <option>Urgent</option>
        </select>
        <span style="color:red">{{ fieldErrors.urgency }} </span>
        <span v-if="isNotUrgent" style="color:red; display:block">
          Must be Moderate to Urgent
        </span>
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input :checked="termsAndConditions" @change="onInputChange"
            name="TERMS_AND_CONDITIONS" type="checkbox" />
          <label>I accept the Terms and Conditions</label>
          <span style="color:red">{{ fieldErrors.termsAndConditions }} </span>
        </div>
      </div>
      <button :disabled="submitButtonDisabled" class="ui button">{{ submitButtonText }}</button>
    </form>
    <div class="ui segment">
      <h4 class="ui header">Items</h4>
      <ul>
        <li v-for="item in items" class="item" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>
<script>

import { mapGetters } from 'vuex';

export default {
  name: 'InputForm',
  created() {
    this.loading = true;
    this.$store.dispatch('loadItems')
      .then(() => {
        this.loading = false;
      }).catch((error) => {
        console.log(error);
      });
  },
  data() {
    return {
      fieldErrors: {
        newItem: undefined,
        email: undefined,
        urgency: undefined,
        termsAndConditions: undefined,
      },
      loading: false,
      saveStatus: 'READY',
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      this.fieldErrors = this.validateForm(this.$store.state.fields);
      if (Object.keys(this.fieldErrors).length) return;

      const items = [...this.$store.state.items,
        this.$store.state.fields.newItem];
      this.saveStatus = 'SAVING';

      this.$store.dispatch('saveItems', items)
        .then(() => {
          this.saveStatus = 'SUCCESS';
        }).catch((error) => {
          console.log(error);
          this.saveStatus = 'ERROR';
        });
    },
    onInputChange(e) {
      const element = e.target;
      const value = element.name === 'TERMS_AND_CONDITIONS' ? element.checked : element.value;
      this.$store.commit(`UPDATE_${element.name}`, value);
    },
    validateForm(fields) {
      const errors = {};
      if (!fields.newItem) errors.newItem = 'New Item Required.';
      if (!fields.email) errors.email = 'Email Required.';
      if (!fields.urgency) errors.urgency = 'Urgency Required.';
      if (!fields.termsAndConditions) {
        errors.termsAndConditions = 'Terms and Conditions have to be approved.';
      }

      if (fields.email && !this.isEmail(fields.email)) {
        errors.email = 'Invalid Email.';
      }
      return errors;
    },
    isEmail(email) {
      const validEmailRegExp = /\S+@\S+\.\S+/;
      return validEmailRegExp.test(email);
    },
  },
  computed: {
    ...mapGetters([
      'newItem',
      'newItemLength',
      'isNewItemInputLimitExceeded',
      'email',
      'urgency',
      'isNotUrgent',
      'termsAndConditions',
      'items',
    ]),
    submitButtonDisabled() {
      return this.isNewItemInputLimitExceeded()
          || this.isNotUrgent
          || this.saveStatus === 'SAVING';
    },
    submitButtonText() {
      switch (this.saveStatus) {
        case 'SAVING':
          return 'Saving...';
        case 'SUCCESS':
          return 'Saved! Submit another';
        case 'ERROR':
          return 'Save failed - Retry?';
        default:
          return 'Submit';
      }
    },
  },
};
</script>
