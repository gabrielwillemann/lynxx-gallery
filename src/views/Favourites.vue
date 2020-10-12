<template>
  <div>
    <ImageList :images="favourites" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ImageList from '@/components/ImageList.vue';

export default {
  name: 'Gallery',
  components: { ImageList },
  computed: {
    ...mapState({
      images: state => state.images,
    }),
    favourites() {
      return this.images.filter(image => image.favourite);
    },
  },
};
</script>
