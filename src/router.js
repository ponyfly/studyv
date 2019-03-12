import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// lazy-load component
const About = () => import(/* webpackChunkName: 'about' */ './views/About.vue')
const Events = () => import(/* webpackChunkName: 'about' */ './views/Events.vue')
const FormSu = () => import(/* webpackChunkName: 'about' */ './views/FormSu.vue')
const ComponentS = () => import(/* webpackChunkName: 'about' */ './views/ComponentS.vue')
const ComponentD = () => import(/* webpackChunkName: 'about' */ './views/ComponentD.vue')
const ComponentSlot = () => import(/* webpackChunkName: 'about' */ './views/ComponentSlot.vue')
const ComponentBorder = () => import(/* webpackChunkName: 'about' */ './views/ComponentBorder.vue')
const ComponentTransition = () => import(/* webpackChunkName: 'about' */ './views/ComponentTransition.vue')
const ComponentMixin = () => import(/* webpackChunkName: 'about' */ './views/ComponentMixin.vue')
const RouterCom = () => import(/* webpackChunkName: 'about' */ './views/RouterCom.vue')
const RouterComDetail = () => import(/* webpackChunkName: 'about' */ './views/RouterComDetail.vue')
const ComponentFetch = () => import(/* webpackChunkName: 'about' */ './views/ComponentFetch.vue')
const ComponentFetch1 = () => import(/* webpackChunkName: 'about' */ './views/ComponentFetch1.vue')
const ComponentCart = () => import(/* webpackChunkName: 'about' */ './views/ComponentCart.vue')

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      default: Home,
      viewA: About
    }
  },
  {
    path: '/home',
    name: 'home',
    props: { id: 10 },
    component: Home
  },
  {
    path: '/home2',
    name: 'home2',
    redirect: { name: 'home' }
  },
  {
    path: '/home3',
    name: 'home3',
    redirect: to => {
      return { name: 'home' }
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/about1',
    name: 'about1',
    alias: '/events'
  },
  {
    path: '/about2/:id',
    name: 'about2',
    components: {
      default: About,
      viewA: Home
    },
    props: {
      default: true,
      viewA: false
    }
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/formsu',
    name: 'FormSu',
    component: FormSu
  },
  {
    path: '/component',
    name: 'ComponentS',
    component: ComponentS
  },
  {
    path: '/componentd',
    name: 'ComponentD',
    component: ComponentD
  },
  {
    path: '/ComponentSlot',
    name: 'ComponentSlot',
    component: ComponentSlot
  },
  {
    path: '/ComponentBorder',
    name: 'ComponentBorder',
    component: ComponentBorder
  },
  {
    path: '/ComponentTransition',
    name: 'ComponentTransition',
    component: ComponentTransition
  },
  {
    path: '/ComponentMixin',
    name: 'ComponentMixin',
    component: ComponentMixin,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/ComponentFetch',
    name: 'ComponentFetch',
    component: ComponentFetch
  },
  {
    path: '/ComponentCart',
    name: 'ComponentCart',
    component: ComponentCart
  },
  {
    path: '/ComponentFetch1/:id',
    name: 'ComponentFetch1',
    component: ComponentFetch1,
    props: true,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/RouterCom/:id',
    name: 'RouterCom',
    component: RouterCom,
    props: true,
    children: [
      {
        path: 'detail',
        name: 'RouterComDetail',
        component: RouterComDetail,
        props: true
      }
    ],
    beforeEnter(to, from, next) {
      console.log('beforeEnter')
      next()
    }
  }
]
const router = new Router({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
router.beforeEach(function(to, from, next) {
  console.log('beforeEach')
  next()
})

router.beforeResolve(function(to, from, next) {
  console.log('beforeResolve')
  next()
})
router.afterEach(function(to, from) {
  console.log('afterEach')
})

export default router
