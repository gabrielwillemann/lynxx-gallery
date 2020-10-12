import Vue from 'vue';
import VueRouter from 'vue-router';

import Gallery from '@/views/Gallery.vue';
import Favourites from '@/views/Favourites.vue';
import ImageFullScreen from '@/views/ImageFullScreen.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'index', redirect: { name: 'Gallery' } },
  { path: '/gallery', name: 'Gallery', component: Gallery },
  { path: '/gallery/favourites', name: 'Favourites', component: Favourites },
  { path: '/gallery/:id/show', name: 'ImageFullScreen', component: ImageFullScreen, meta: { fullscreen: true } },
];

const router = new VueRouter({
  routes,
});

export default router;
