<template>
  <div class="select">
    <select @change="onSelect">
      <option v-for="(option, index) in options"
        :key="index"
        :selected="value===option.value"
        :value="option.value">
        {{option.label}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true
    },
    options: { // needs {label, value}
      type: Array,
      default: () => []
    }
  },

  methods: {
    onSelect (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
