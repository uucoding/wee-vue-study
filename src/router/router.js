
import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    // 别名访问
    alias: '/home',
    component: Home,
    props: {
      name: '路由传递的参数'
    }
  },
  {
    path: '/about',
    // 命名路由
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 懒加载，只有访问的时候才会渲染
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    props: route => ({
      name: route.query.name
    }),
    /**
     * 路由独享守卫
     */
    beforeEnter: (to, from, next) => {
      console.log('this is route beforeEnter')
      next()
    },
    // 设置一些数据，或者权限
    meta: {
      title: 'about'
    }
  },
  // 动态路由/：name（name可以动态变化）
  {
    path: '/dynamic-router/:name',
    component: () => import('@/views/DynamicRouter.vue'),
    // 可以进行路由传值
    props: true
  },
  // 嵌套路由
  // parent/child1  or parent/child2,访问路由后，子页面自动在<router-view/>上渲染
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    // 包含嵌套在parent.vue子集的页面
    children: [
      {
        // 路径中的“/”不需要写，会自动补全
        // path: '/child_1',
        path: 'child1',
        component: () => import('@/views/child1.vue')
      },
      {
        // 路径中的“/”不需要写，会自动补全
        // path: '/child_1',
        path: 'child2',
        component: () => import('@/views/child2.vue')
      }
    ]
  },
  // 命名视图
  {
    path: '/name-view',
    // 此处组件是 复数形式
    components: {
      // 没有命名的视图，走默认
      default: () => import('@/views/default-name-view.vue'),
      // email视图
      email: () => import('@/views/email-name-view.vue'),
      // tel视图
      tel: () => import('@/views/tel-name-view.vue')
    }
  },
  // 重定向
  {
    path: '/main',
    // redirect: '/'

    // redirect: {
    //   // 通过命名路由方式
    //   name: 'about'
    // }

    // 函数方式
    redirect: to => {
      // return '/'
      return {
        name: 'about'
      }
    }
  },
  {
    path: '/bus-store',
    component: () => import('@/views/bus-store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
