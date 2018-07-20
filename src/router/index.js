import Vue from 'vue';
import Router from 'vue-router';
import ComicList from '../components/ComicList/ComicList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ComicList,
    },
    {
      path: '/comics',
      name: 'ComicList',
      component: ComicList,
    },
  ],
});
