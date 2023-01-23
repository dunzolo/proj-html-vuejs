<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';

export default {
  components: {
    AppHeader,
    AppJumbotron
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
    <AppJumbotron/>
  </div>
</template>

<style lang="scss">
@use './style/generals.scss'
</style>