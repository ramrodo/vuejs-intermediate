<template>
  <form id="form" @submit.prevent="submitForm">
    <form-field label="Email" v-bind:error="errors.email">
      <!-- TODO validate -->
      <input v-model="email" class="input" placeholder="Email input">

    </form-field>

    <form-field label="Phone number" :error="errors.phone">
      <!-- TODO validate -->
      <input v-model="phone" class="input" placeholder="10 digits">

    </form-field>

    <form-field label="Quantity">
      <!-- TODO create custom select -->
      <form-select v-model="quantity" :options="quantityOptions" />
    </form-field>

    <form-field label="Colors">
      <p>Each printer can only print one color,
        choose it/them:</p>
      <form-select
      v-for="(color, index) in computedColors"
      :key="index"
      :value="color"
      @input="value => selectColor(value, index)"
      :options="colorOptions" />
    </form-field>

    <button type="submit" class="button is-link">
      <!-- TODO set dynamic price depending on quantity -->
      Buy for ${{ price * quantity | toMoney }}
    </button>
  </form>
</template>

<script>
import FormField from "./FormField";
import FormSelect from "./FormSelect";
import validation from "../utils/validation";

const quantityOptions = [
  { value: "1", label: "Buy 1" },
  { value: "2", label: "Buy 2" },
  { value: "3", label: "Buy 3" },
];
const colorOptions = [
  { value: "black", label: "Black" },
  { value: "cyan", label: "Cyan" },
  { value: "magenta", label: "Magenta" },
  { value: "yellow", label: "Yellow" },
];

const colorDefault = colorOptions[0].value;

export default {
  components: {
    FormField,
    FormSelect,
  },

  data() {
    return {
      quantityOptions,
      colorOptions,
      price: 9.99999,
      email: "",
      phone: "",
      quantity: "3",
      colors: [],
      shouldValidate: true,
    };
  },

  filters: {
    toMoney (value) {
      return Math.floor(value * 100) / 100;
    },
  },

  computed: {
    computedColors() {
      let newColors = [];
      for(let i = 0; i < parseInt(this.quantity); i++) {
        newColors[i] = this.colors[i];
        if (!newColors[i]) {
          newColors[i] = colorDefault;
        }
      }

      return newColors;
    },
    errors() {
      let messages = {};

      if(!this.shouldValidate) {
        return messages;
      }

      messages.email = validation.validateEmail(this.email);
      messages.phone = validation.validatePhone(this.phone);

      return messages;
    },
  },

  methods:{
    selectColor(value, index) {
      let aux = [...this.colors];
      aux[index] = value;
      this.colors = aux;
    },
    submitForm() {
      this.shouldValidate = true;

      const hasErrors = Object.keys(this.errors)
        .some(key => this.errors[key]);

      if (!hasErrors) {
        console.log('submitted');
      }
    },
    formData() {
      return {
        eamil: this.email,
      }
    }
  },
};
</script>

<style scoped>
.select {
  margin-right: 10px;
}
</style>
