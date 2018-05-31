<template>
  <div class="select">
    <select @change="onSelect">
      <option v-for="(option, index) in options"
        :key="index"
        :selected="value === option.value"
        :value="option.value">
        {{option.label}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: { // needs {label, value}
      type: Array,
      default: () => []
    },
    value: {
      required: true,
    },
  },

  methods: {
    onSelect (e) {
      console.log('selected option', e.target.value)
      // TODO create custom v-model
      this.$emit('input', e.target.value)
    }
  }
}
</script>
