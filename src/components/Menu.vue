<template>
  <div class="header" v-if="show">
    <div class="header-link" @click="pushGallery">All Images</div>
    <div class="header-link" @click="pushFavourites">Favourites</div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    selectedGallery() {
      return this.$route.name == 'Gallery';
    },
    selectedFavourites() {
      return this.$route.name == 'Favourites';
    },
    show() {
      return !this.$route.meta?.fullscreen;
    },
  },
  methods: {
    pushGallery() {
      if (!this.selectedGallery) {
        this.$router.push({ name: 'Gallery' });
      }
    },
    pushFavourites() {
      if (!this.selectedFavourites) {
        this.$router.push({ name: 'Favourites' });
      }
    },
  },
};
</script>
