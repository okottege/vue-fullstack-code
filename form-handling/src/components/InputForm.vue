<template>
  <div class="input-form">
    <form @submit="submitForm" class="ui form">
      <div class="field">
        <label>New Item</label>
        <input v-model="fields.newItem" type="text" placeholder="Add an item!" />
        <span style="color:red">{{ fieldErrors.newItem }} </span>
      </div>
      <div class="field">
        <label>Email</label>
        <input v-model="fields.email" type="text" placeholder="What's your email?" />
        <span style="color:red">{{ fieldErrors.email }} </span>
      </div>
      <div class="field">
        <label>Urgency</label>
        <select v-model="fields.urgency" class="ui fluid search dropdown">
          <option disabled value="">Please select one</option>
          <option>Nonessential</option>
          <option>Moderate</option>
          <option>Urgent</option>
        </select>
        <span style="color:red">{{ fieldErrors.urgency }} </span>
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input v-model="fields.termsAndConditions" type="checkbox" />
          <label>I accept the Terms and Conditions</label>
          <span style="color:red">{{ fieldErrors.termsAndConditions }} </span>
        </div>
      </div>
      <button class="ui button">Submit</button>
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
export default {
  name: 'InputForm',
  data() {
    return {
      fields: {
        newItem: '',
        email: '',
        urgency: '',
        termsAndConditions: false,
      },
      items: [],
      fieldErrors: {
        newItem: undefined,
        email: undefined,
        urgency: undefined,
        termsAndConditions: undefined,
      },
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      this.fieldErrors = this.validateForm(this.fields);
      if (Object.keys(this.fieldErrors).length) return;

      this.items.push(this.newItem);
      this.newItem = '';
      this.email = '';
      this.urgency = '';
      this.termsAndConditions = false;
    },
    validateForm(fields) {
      const errors = {};
      if (!fields.newItem) errors.newItem = 'New Item Required.';
      if (!fields.email) errors.email = 'Email Required.';
      if (!fields.urgency) errors.urgency = 'Urgency Required.';
      if (!fields.termsAndConditions) {
        errors.termsAndConditions = 'Terms and Conditions have to be approved.';
      }

      if(fields.email && !this.isEmail(fields.email)) {
        errors.email = 'Invalid Email.';
      }
      return errors;
    },
    isEmail(email) {
      const validEmailRegExp = /\S+@\S+\.\S+/;
      return validEmailRegExp.test(email);
    },
  },
};
</script>
