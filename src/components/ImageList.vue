<template>
  <div>
    <div class="images">
      <template v-for="image in images">
        <div v-if="image.blob" :key="image.id" class="image-container" :title="image.name">
          <img :src="image.blob" class="image" @click="selectImage(image)" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ['images'],
  methods: {
    selectImage(image) {
      this.$store.commit('setImageSelected', image);
      this.$router.push({ name: 'ImageFullScreen', params: { id: image.id } });
    },
  },
};
</script>
