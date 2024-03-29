window.Vue = require('vue');
require('vue-resource');

window.Laravel = {
    csrfToken: document.querySelector("meta[name='_token']").getAttribute('content')
}

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

    next();
});


