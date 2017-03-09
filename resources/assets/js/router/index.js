import Router from 'vue-router'

Vue.use(Router);

import Inbox from '../components/Inbox.vue'
import Conversation from '../components/Conversation.vue'
import Profile from '../components/Profile.vue'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/dashboard', redirect: '/dashboard/inbox' },
    { path: '/dashboard/inbox', component: Inbox },
    { path: '/dashboard/inbox/:id(\\d+)', component: Conversation },
    { path: '/dashboard/profile', component: Profile },
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