<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        1D Printer
      </nuxt-link>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/shop">
          Toner store
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <nuxt-link v-show="!loading" to="/shop">
            <img src="~/assets/cart-icon.png">
            <span>{{numItems}} items</span>
          </nuxt-link>
        </div>
      </div>
    </div>

  </nav>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters('cart', {
      numItems: 'numItems',
    }),
    ...mapState('cart', ['loading']),
    // ...mapGetters('cart', ['numItems']);
  },
  beforeMount() {
    this.fetchLocalStorage();
  },
  methods: {
    ...mapActions("cart", ['fetchLocalStorage'])
  }
}
</script>

