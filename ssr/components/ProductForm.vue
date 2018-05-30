<template>
  <form id="form" @submit.prevent="submitForm">
    <form-field label="Email" :error="errors.email">
      <input v-model="email" class="input" placeholder="Email input">

    </form-field>

    <form-field label="Phone number" :error="errors.phone">
      <input v-model="phone" class="input" placeholder="10 digits">

    </form-field>

    <form-field label="Quantity">
      <form-select v-model="quantity" :options="quantityOptions" />
    </form-field>

    <form-field label="Colors">
      <p>Each printer can only print one color,
        choose it/them:</p>
      <form-select v-for="(color, index) in computedColors"
        :key="index"
        :value="color"
        @input="value => selectColor(value, index)"
        :options="colorOptions" />
    </form-field>

    <button type="submit" class="button is-link">
      Buy for ${{ price * quantity | moneyFilter }}
    </button>
  </form>
</template>

<script>
import FormField from './FormField'
import FormSelect from './FormSelect'
import validation from '../utils/validation.js'

const quantityOptions = [
  {value: '1', label: 'Buy 1'},
  {value: '2', label: 'Buy 2'},
  {value: '3', label: 'Buy 3'}
]
const colorOptions = [
  {value: 'black', label: 'Black'},
  {value: 'cyan', label: 'Cyan'},
  {value: 'magenta', label: 'Magenta'},
  {value: 'yellow', label: 'Yellow'}
]
const defaultColor = colorOptions[0].value

export default {
  components: {
    FormField,
    FormSelect,
  },

  data () {
    return {
      quantityOptions,
      colorOptions,
      price: 9.9999999,
      email: '',
      phone: '',
      quantity: 1,
      shouldValidate: false,
      selectedColors: []
    }
  },

  filters: {
    moneyFilter (number) {
      return Math.floor(number*100)/100
    }
  },

  computed: {
    computedColors() {
      let colors = []
      for(let i=0; i<this.quantity; i++) {
        colors[i] = this.selectedColors[i]

        if(!colors[i]) {
          colors[i] = defaultColor
        }
      }
      return colors
    },
    errors () {
      let messages = {}
      if(!this.shouldValidate) {
        return messages
      }

      messages.email = validation.validateEmail(this.email)
      messages.phone = validation.validatePhone(this.phone)

      return messages
    },
    isValidForm () {
      const hasError = Object.keys(this.errors).some(key => this.errors[key])
      return !hasError
    },
    formData () {
      return {
        email: this.email,
        phone: this.phone,
        quantity: this.quantity,
        colors: this.computedColors
      }
    }
  },

  methods: {
    selectColor(value, index) {
      let colors = [...this.selectedColors]
      colors[index] = value
      this.selectedColors = colors
    },
    submitForm () {
      this.shouldValidate = true

      if(this.isValidForm) {
        // Here goes the request to the shop service
        console.log('Form submitted!')
        console.log(this.formData)
      }
    }
  }
}
</script>

<style scoped>
.select {
  margin-right: 10px;
}
</style>
