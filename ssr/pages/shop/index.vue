<template>
  <section class="section">
    <div class="container">

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="~/assets/black-toner.jpg" alt="black toner">
            <nuxt-link class="button details-button is-info" to="/shop/toner/black">
              Details
            </nuxt-link>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="~/assets/cyan-toner.jpg" alt="cyan toner">
            <nuxt-link class="button details-button is-info" to="/shop/toner/cyan">
              Details
            </nuxt-link>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="~/assets/magenta-toner.jpg" alt="magenta toner">
            <nuxt-link class="button details-button is-info" to="/shop/toner/magenta">
              Details
            </nuxt-link>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="~/assets/yellow-toner.jpg" alt="yellow toner">
            <nuxt-link class="button details-button is-info" to="/shop/toner/yellow">
              Details
            </nuxt-link>
          </div>
        </div>
      </div>

      <!-- TODO add list of items in cart -->

      <ul>
        <li v-for="(item, index) in groupedItems" :key="index">
          <div class="button">-</div>
          <div class="button">+</div>
          {{key}} x {{item}}
        </li>
      </ul>

    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('cart', ['groupedItems']),
  },
  head() {
    return {
      title: '1D printer - shop'
    }
  }
}
</script>

<style scoped>
.tile.is-child.box {
  position: relative;
}
.details-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>
