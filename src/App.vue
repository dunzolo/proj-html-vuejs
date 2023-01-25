<script>
import AppHeader from './components/AppHeader.vue';
import AppJumbotron from './components/AppJumbotron.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppJumbotron,
    AppMain,
    AppFooter
  },
  data() {
    return {
      array_navbar: [
        {
          label: 'Home',
          url: '#',
          active: true,
          dropdown_list: [
            'Alternate Homepage 1', 'Alternate Homepage 2'
          ]
        },
        {
          label: 'History',
          url: '#',
          active: false,
          dropdown_list: [
            'Reception & Bar'
          ]
        },
        {
          label: 'Team',
          url: '#',
          active: false,
        },
        {
          label: 'Menu',
          url: '#',
          active: false,
          dropdown_box: [
            {
              title: 'titolo',
              icon: 'fa-solid fa-plate-wheat fa-5x',
              paragraph: 'paragrafo',
              background_image: '/mm-1.jpg'
            },
            {
              title: 'titolo',
              icon: 'fa-solid fa-bowl-rice fa-5x',
              paragraph: 'paragrafo',
              background_image: '/mm-2.jpg'
            },
            {
              title: 'titolo',
              icon: 'fa-solid fa-cookie-bite fa-5x',
              paragraph: 'paragrafo',
              background_image: '/mm-3.jpg'
            },
            {
              title: 'titolo',
              icon: 'fa-solid fa-martini-glass-citrus fa-5x',
              paragraph: 'paragrafo',
              background_image: '/mm-4.jpg'
            },
          ]
        },
        {
          label: 'Takeout',
          label_new: 'New',
          url: '#',
          active: false,
          dropdown_list: [
            'Simple Product', 'Variable Product'
          ]
        },
        {
          label: 'Bulletin',
          url: '#',
          active: false,
        },
        {
          label: 'Reservation',
          url: '#',
          active: false,
        }
      ],
      array_footer: [
        {
          label: 'Facebook',
          icon: 'fa-brands fa-facebook-f',
          active: false
        },
        {
          label: 'Twitter',
          icon: 'fa-brands fa-twitter fa',
          active: false
        },
        {
          label: 'Instagram',
          icon: 'fa-brands fa-instagram',
          active: false
        },
        {
          label: 'Youtube',
          icon: 'fa-brands fa-youtube',
          active: false
        },
        {
          label: 'LinkedIn',
          icon: 'fa-brands fa-linkedin-in',
          active: false
        },
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
    <AppFooter :footer_list="array_footer"/>
  </div>
</template>

<style lang="scss">
@use './style/generals.scss'
</style>