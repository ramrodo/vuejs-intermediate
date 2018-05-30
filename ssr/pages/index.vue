<template>
  <product-hero/>
</template>

<script>
import ProductHero from '~/components/ProductHero'
// pages
// -- buy
// -- shop
// ||-- toner
//   ||-- black
//   ||-- cyan
//   ||-- magenta
//   ||-- yellow

export default {
  components: {
    ProductHero
  },
  head() {
    return {
      title: '1D printer'
    }
  }
}
</script>
