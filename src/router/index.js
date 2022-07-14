import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../views/Welcome'


Vue.use(Router);

const routes = [
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
    },
  ];

  const router = new Router({
    routes,
  });
  
  export default router;