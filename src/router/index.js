import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import index from '@/pages/index';
import nominate from '../components/nominate';
import strategy from '../components/strategy';
import collection from '../components/collection';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/',
          redirect: '/nominate',
        },
        {
          path: '/nominate',
          name: 'nominate',
          component: nominate,
        },
        {
          path: '/strategy',
          name: 'strategy',
          component: strategy,
        },
        {
          path: '/collection',
          name: 'collection',
          component: collection,
        },
      ],
    },
  ],
});
