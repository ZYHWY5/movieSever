import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/register.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home.vue'),
    },
    {
      path: '/searched',
      name: 'searched',
      component: () => import('../views/searched.vue'),
    },
    {
      path: '/details',
      name: 'details',
      component: () => import('../views/details.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue'),
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import('../views/personal.vue'),
      children:[
        {
          path:'/message',
          name:'message',
          component:() => import('../views/personalMessage.vue')
        },
        {
          path:'/password',
          name:'password',
          component:() => import('../views/changePassword.vue')
        },
      ]
    },
  ],
})


router.beforeEach((to, from) => {
  if(to.path == '/home'){
    if(!localStorage.getItem("id")){
      return{
        path:'/'
      };
    }
  }

  if(to.path == '/'){
    if(localStorage.getItem("id")){
      router.push('/home')
    }
  }

  if(to.path == '/personal' && from.path == '/message' || to.path == '/personal' && from.path == '/password'){
    router.push('/message');
  }
})

export default router
