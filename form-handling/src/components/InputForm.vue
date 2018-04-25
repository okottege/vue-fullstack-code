<template>
  <div class="input-form">
    <form @submit="submitForm" class="ui form">
      <div class="field">
        <label>New Item</label>
        <input v-model="fields.newItem" type="text" placeholder="Add an item!" />
        <span style="float:right">{{ fields.newItem.length }} / 20</span>
        <span style="color:red">{{ fieldErrors.newItem }} </span>
        <span style="color:red; display:block" v-if="isNewItemInputLimitExceeded">
          Must be under <b>twenty</b> characters
        </span>
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
        <span v-if="isNotUrgent" style="color:red; display:block">
          Must be Moderate to Urgent
        </span>
      </div>
      <div class="field">
        <div class="ui checkbox">
          <input v-model="fields.termsAndConditions" type="checkbox" />
          <label>I accept the Terms and Conditions</label>
          <span style="color:red">{{ fieldErrors.termsAndConditions }} </span>
        </div>
      </div>
      <button :disabled="isNewItemInputLimitExceeded || isNotUrgent" class="ui button">Submit</button>
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
let apiClient = {
  count: 1,
  loadItems: () => {
    return {
      then: cb => {
        setTimeout(() => cb(JSON.parse(localStorage.items || [])), 1000);
      }
    };
  },
  saveItems: items => {
    const success = !!(this.count++ % 2);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!success) return reject({ success });

        localStorage.items = JSON.stringify(items);
        return resolve({ success });
      }, 1000);
    });
  }
};

export default {
  name: 'InputForm',
  created() {
    this.loading = true;

    apiClient.loadItems().then(items => {
      this.items = items;
      this.loading = false;
    });
  },
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
      loading: false,
      saveStatus: 'READY'
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();

      this.fieldErrors = this.validateForm(this.fields);
      if (Object.keys(this.fieldErrors).length) return;

      const items = [...this.items, this.fields.newItem];
      this.saveStatus = 'SAVING';

      apiClient.saveItems(items)
        .then(() => {
          this.items = items;
          this.fields.newItem = '';
          this.fields.email = '';
          this.fields.urgency = '';
          this.fields.termsAndConditions = false;
          this.saveStatus = 'SUCCESS';
        })
        .catch(err => {
          console.log(err);
          this.saveStatus = 'ERROR';
        });

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
  computed: {
    isNewItemInputLimitExceeded() {
      return this.fields.newItem.length >= 20;
    },
    isNotUrgent() {
      return this.fields.urgency === 'Nonessential';
    },
  }
};
</script>
