<template>
  <div>
    <Menu />
    <Loading />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Loading from './components/Loading.vue';

export default {
  name: 'App',
  components: { Menu, Loading },
  mounted() {
    this.$store.dispatch('loadImagesList');
  },
};
</script>
