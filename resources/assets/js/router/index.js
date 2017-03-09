import Router from 'vue-router'

Vue.use(Router);

import Inbox from '../components/Inbox.vue'
import Conversation from '../components/Conversation.vue'
import Profile from '../components/Profile.vue'
import JobRequests from '../components/JobRequests.vue'
import CreateJobRequest from '../components/CreateJobRequest'
import EditJobRequest from '../components/EditJobRequest'
import Company from '../components/Company'
import JobOffers from '../components/JobOffers.vue'
import CreateJobOffer from '../components/CreateJobOffer.vue'
import EditJobOffer from '../components/EditJobOffer.vue'

export default new Router({
  mode: 'history',
  routes: [
    { path: '/dashboard', redirect: '/dashboard/inbox' },
    { path: '/dashboard/inbox', component: Inbox },
    { path: '/dashboard/inbox/:id(\\d+)', component: Conversation },
    { path: '/dashboard/profile', component: Profile },
    { path: '/dashboard/jobrequests', component: JobRequests },
    { path: '/dashboard/jobrequests/create', component: CreateJobRequest },
    { path: '/dashboard/jobrequests/:id(\\d+)', component: EditJobRequest },
    { path: '/dashboard/company', component: Company },
    { path: '/dashboard/joboffers', component: JobOffers },
    { path: '/dashboard/joboffers/create', component: CreateJobOffer },
    { path: '/dashboard/joboffers/:id(\\d+)', component: EditJobOffer },
    { path: '/dashboard/admin', component: Inbox },
    { path: '*', redirect: '/dashboard' }
  ]
});