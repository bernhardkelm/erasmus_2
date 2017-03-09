<template>
    <section class="dashboard__requests">
        <loading></loading>
        <div v-if="!loading">
          <h3 class="dashboard__title">Job Offers</h3>
          <router-link to="/dashboard/jobrequests/create" class="button create is-info">New Job Offer</router-link>
          <div class="clearfix"></div>
          <p>{{ offers.length }} job offers in total.</p>
          
          <div class="dashboard__request" v-for="offer in offers">
            <h4>{{ offer.title }}</h4>
            <div class="request__body">
              {{ offer.body }}
            </div>
            <router-link :to="'/dashboard/jobrequests/' + offer.id" class="button is-outline">Edit</router-link>
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
            offers() {
                return this.$store.getters.offers;
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
                this.$store.dispatch('FETCH_OFFERS', response);
              });
            
        },
    }
</script>