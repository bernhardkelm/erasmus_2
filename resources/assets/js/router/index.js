import Router from 'vue-router'

Vue.use(Router);

import Overview from '../components/dashboard/layouts/Overview.vue'
import EditProfile from '../components/dashboard/layouts/EditProfile.vue'
import AMVsIndex from '../components/dashboard/layouts/AMVsIndex.vue'
import AMVsCreate from '../components/dashboard/layouts/AMVsCreate.vue'
import AMVsEdit from '../components/dashboard/layouts/AMVsEdit.vue'
import AMVsContests from '../components/dashboard/layouts/AMVsContests.vue'
import Contests from '../components/dashboard/layouts/Contests.vue'
import ContestUsers from '../components/dashboard/layouts/ContestUsers.vue'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/dashboard/inbox', component: Overview, alias: '/dashboard' },
    { path: '/dashboard/inbox/:id(\\d+)', component: AMVsIndex },
    { path: '/dashboard/profile', component: AMVsCreate },
    { path: '/dashboard/jobrequests', component: AMVsEdit },
    { path: '/dashboard/jobrequests/create', component: JobRequestsCreate },
    { path: '/dashboard/jobrequests/:id(\\d+)', component: AMVsContests },
    { path: '/dashboard/company', component: Contests },
    { path: '/dashboard/joboffers', component: ContestUsers },
    { path: '/dashboard/joboffers/create', component: EditProfile },
    { path: '/dashboard/joboffers/:id(\\d+)', component: EditProfile },
    { path: '/dashboard/admin', component: EditProfile },
    { path: '*', redirect: '/dashboard' }
  ]
});