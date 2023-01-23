<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      array_navbar: [
        {
          label: 'Home',
          url: '#'
        },
        {
          label: 'History',
          url: '#'
        },
        {
          label: 'Team',
          url: '#'
        },
        {
          label: 'Menu',
          url: '#'
        },
        {
          label: 'Takeout',
          url: '#'
        },
        {
          label: 'Bulletin',
          url: '#'
        },
        {
          label: 'Reservation',
          url: '#'
        }
      ]
    }
  },
}
</script>

<template lang="">
  <div>
    <AppHeader :navbar_list="array_navbar"/>
  </div>
</template>

<style lang="scss">
@use './style/generals.scss'
</style>