<template>
  <div>
    <section class="hero">
      <div class="hero-body" :style="{backgroundColor: color}">
        <div class="container">
          <h1 class="title">
            {{color}} toner
          </h1>
          <a class="button is-warning">
            <!-- TODO add to cart -->
            Add to cart
          </a>
        </div>
      </div>
    </section>
    <div class="container">
      <img :src="image">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>

  </div>
</template>

<script>
const validColors = ['black', 'magenta', 'cyan', 'yellow']
export default {
  validate (context) {
    return validColors.some(color => color === context.params.color)
  },
  computed: {
    color () {
      return this.$route.params.color
    },
    image () {
      return require(`~/assets/${this.color}-toner.jpg`)
    }
  },
  head() {
    return {
      title: `1D printer - Toner ${this.currentToner}`
    }
  }
}
</script>

<style scoped>
.title {
  text-transform: capitalize
}
</style>
