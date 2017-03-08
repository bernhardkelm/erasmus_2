window.Vue = require('vue');
require('vue-resource');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

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