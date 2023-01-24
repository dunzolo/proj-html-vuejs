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
          url: '#',
          tag_list: [
            'Alternate Homepage 1', 'Alternate Homepage 2'
          ],
          isVisibile: false

        },
        {
          label: 'History',
          url: '#',
          dropdown_menu: [
            'Reception & Bar'
          ]
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
          url: '#',
          dropdown_menu: [
            'Simple Product', 'Variable Product'
          ]
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