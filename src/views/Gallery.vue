<template>
  <div>
    <ImageList :images="images" />
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
  },
};
</script>
