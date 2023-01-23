<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppJumbotron,
    AppMain
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
    <AppMain/>
  </div>
</template>

<style lang="scss">
@use './style/generals.scss'
</style>