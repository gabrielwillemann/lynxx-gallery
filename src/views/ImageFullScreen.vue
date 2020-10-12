<template>
  <div class="full-screen-background">
    <h1 class="full-screen-title">{{ imageSelected.name }}</h1>
    <div class="full-screen-container">
      <img :src="imageSelected.blob" class="selectedImage" />
    </div>
    <div class="full-screen-footer">
      <a href="#" @click.prevent="$router.go(-1)">Go Back</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ImageFullScreen',
  computed: {
    ...mapState({
      imageSelected: state => state.imageSelected,
    }),
  },
};
</script>
