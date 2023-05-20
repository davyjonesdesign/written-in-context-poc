import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GoogleMap from '../views/GoogleMap.vue';
import MapView from '../views/MapView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/google',
    name: 'google',
    component: GoogleMap,
  },
  {
    path: '/map',
    name: 'map',
    component: MapView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
