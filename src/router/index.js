import Vue from 'vue';
import Router from 'vue-router';
import ComicsPage from '../components/ComicsPage/ComicsPage.vue';
import CharactersPage from '../components/CharactersPage/CharactersPage.vue';
import IndexPage from '../components/IndexPage/IndexPage.vue';
import SingleComicPage from '../components/SingleComicPage/SingleComicPage.vue';
import SingleCharacterPage from '../components/SingleCharacterPage/SingleCharacterPage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage,
    },
    {
      path: '/comics',
      name: 'ComicsPage',
      component: ComicsPage,
    },
    {
      path: '/comics/p:page',
      name: 'ComicsPageWithParam',
      component: ComicsPage,
    },
    {
      path: '/characters',
      name: 'CharactersPage',
      component: CharactersPage,
    },
    {
      path: '/characters/p:page',
      name: 'CharactersPageWithParam',
      component: CharactersPage,
    },
    {
      path: '/comics/comic/:id',
      name: 'SingleComicPage',
      component: SingleComicPage,
    },
    {
      path: '/characters/character/:id',
      name: 'SingleCharacterPage',
      component: SingleCharacterPage,
    },
  ],
});
