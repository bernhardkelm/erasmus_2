import Router from 'vue-router'

Vue.use(Router);

import Inbox from '../components/Inbox.vue'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/dashboard/inbox', component: Inbox, alias: '/dashboard' },
    { path: '/dashboard/inbox/:id(\\d+)', component: Inbox },
    { path: '/dashboard/profile', component: Inbox },
    { path: '/dashboard/jobrequests', component: Inbox },
    { path: '/dashboard/jobrequests/create', component: Inbox },
    { path: '/dashboard/jobrequests/:id(\\d+)', component: Inbox },
    { path: '/dashboard/company', component: Inbox },
    { path: '/dashboard/joboffers', component: Inbox },
    { path: '/dashboard/joboffers/create', component: Inbox },
    { path: '/dashboard/joboffers/:id(\\d+)', component: Inbox },
    { path: '/dashboard/admin', component: Inbox },
    { path: '*', redirect: '/dashboard' }
  ]
});