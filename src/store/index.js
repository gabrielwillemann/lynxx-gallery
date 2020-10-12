import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    images: [],
    imageSelected: null,
  },
  mutations: {
    setLoading(state, value) {
      state.loading = value;
    },
    setImages(state, images) {
      state.images = images;
    },
    addBlobImage(state, { id, blob }) {
      let image = state.images.find(image => image.id == id);
      if (image) {
        image.blob = blob;
      }
    },
    setImageSelected(state, image) {
      state.imageSelected = image;
    },
  },
  actions: {
    async loadImagesList({ commit, dispatch }) {
      commit('setLoading', true);
      let res = await fetch('https://portal-tb.lynxx.co/api-test/image/list');
      let data = await res.json();
      data = data.map(d => {
        d.blob = null;
        return d;
      });
      commit('setImages', data);
      dispatch('loadImages');
    },
    async loadImages({ state, commit }) {
      for (let i = 0; i < state.images.length; i++) {
        let image = state.images[i];
        let lastImage = i == state.images.length - 1;
        fetch(`https://portal-tb.lynxx.co/api-test/image/${image.id}`)
          .then(res => res.blob())
          .then(data => {
            let url = window.URL.createObjectURL(data);
            commit('addBlobImage', { id: image.id, blob: url });
            if (lastImage) {
              commit('setLoading', false);
            }
          });
      }
    },
  },
});
