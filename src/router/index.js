import Vue from 'vue';
import Router from 'vue-router';
import ComicsPage from '../components/ComicsPage/ComicsPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ComicsPage,
    },
    {
      path: '/comics',
      name: 'ComicsPage',
      component: ComicsPage,
    },
  ],
});
