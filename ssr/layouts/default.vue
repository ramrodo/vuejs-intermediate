<template>
  <div>
    <nav-bar />
    <nuxt/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar
  },
  beforeMount () {
    this.getLocalStorageCart()
  },
  methods: {
    ...mapActions('cart',{
      getLocalStorageCart: 'getLocalStorageCart'
    })
  }
}
</script>
