<template>
    <section class="dashboard__requests">
        <loading></loading>
        <div v-if="!loading">
          <h3 class="dashboard__title">Job Requests</h3>
          <router-link to="/dashboard/jobrequests/create" class="button create is-info">New Job Request</router-link>
          <div class="clearfix"></div>
          <p >{{ requests.length }} job requests in total.</p>
          
          <div class="dashboard__request" v-for="request in requests">
            <h4>{{ request.title }}</h4>
            <div class="request__body">
              {{ request.body }}
            </div>
            <router-link :to="'/dashboard/jobrequests/' + request.id" class="button is-outline">Edit</router-link>
          </div>
        </div>
    </section>
</template>

<script>
    import LoadingSpinner from './LoadingSpinner.vue'
    export default {
        components: {
            loading: LoadingSpinner
        },
        computed: {
            /**
             * List of all conversations by this user.
             * @returns {Array}
             */
            requests() {
                return this.$store.getters.requests;
            },
            /**
             * Current loading status (loading is true if data is being loaded asynchronously)
             * @returns {Boolean}
             */
            loading() {
                return this.$store.state.loading;
            }
        },

        mounted: function() {
            // Fetch current user from Vuex or API
            this.$store.dispatch('FETCH_USER')
              .then((response) => {
                this.$store.dispatch('FETCH_REQUESTS', response);
              });
            
        },
    }
</script>