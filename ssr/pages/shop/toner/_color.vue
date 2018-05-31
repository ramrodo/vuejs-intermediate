<template>
  <div>
    <section class="hero">
      <!-- TODO set bg color depending on the toner -->
      <div class="hero-body" :style="heroStyles">
        <div class="container">
          <h1 class="title">
            <!-- TODO set current color -->
            {{color}} toner
          </h1>
          <a @click="addItem" class="button is-warning">
            <!-- TODO add to cart -->
            Add to cart
          </a>
        </div>
      </div>
    </section>
    <div class="container">
      <!-- TODO set image -->
      <img :src="image">
      <p>Lorem ipsum dolor sit amet.</p>
    </div>

  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    addItem() {
      this.addItemToCart(this.color);
    },
    ...mapActions('cart', {
      addItemToCart: 'addItemToCart'
    })
  },
  computed: {
    color() {
      return this.$route.params.color;
    },
    image () {
      return require(`~/assets/${this.color}-toner.jpg`);
    },
    heroStyles() {
      return {
        backgroundColor: this.color,
        opacity: 0.5,
      }
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
