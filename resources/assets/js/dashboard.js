/**
 * Dashboard
 */

import store from './store'
import router from './router'

const vm = new Vue({
    store,
    router,
    el: '#app',

    mounted: function () {
        this.loadData();
    },

    methods: {
        /**
         * Load user and conversation data and store it in Vuex
         */
        loadData() {
            this.$store.dispatch('FETCH_USER');
            this.$store.dispatch('FETCH_CONVERSATIONS');
        }
    }
})