<template>
  <div v-if="$store.state.loading">
    <div class="overlay"></div>
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style>
.overlay {
  background-color: black;
  opacity: 0.5;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
}
</style>
