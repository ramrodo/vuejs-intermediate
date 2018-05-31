<template>
  <div>
    <nav-bar/>
    <nuxt/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
// TODO add nav bar everywhere
export default {
  components: {
    NavBar,
  },
}
</script>
