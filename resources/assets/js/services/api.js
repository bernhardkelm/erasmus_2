export default {
    /**
     * Resource: User
     * GET, PUT, DELETE
     */

    getUser() {
      return Vue.http.get('/api/user')
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    updateUser(id, data) {
      return Vue.http.post(`/api/users/${id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
          }
        })
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    deleteUser(id) {
      return Vue.http.delete(`/api/users/${id}`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    /**
     * Resource: Countries
     * GET
     */

    getCountries() {
      return Vue.http.get(`/api/countries`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    /**
     * Resource: Conversations
     * GET, DELETE
     */

    getUserConversations() {
      return Vue.http.get(`/api/conversations`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    getConversation(id) {
      return Vue.http.get(`/api/conversations/${id}`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    deleteConversation(id) {
      return Vue.http.delete(`/api/conversations/${id}`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    /**
     * Resource: Job Requests
     * GET, PUT, POST, DELETE
     */

    getUserJobRequests(id) {
      return Vue.http.get(`/api/users/${id}/job_requests`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    getJobRequest(id) {
      return Vue.http.get(`/api/job_requests/${id}`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    storeJobRequest(data) {
      return Vue.http.post(`/api/job_requests`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
          }
        })
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    updateJobRequest(id, data) {
      return Vue.http.put(`/api/job_requests/${id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
          }
        })
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    deleteJobRequest(id) {
      return Vue.http.delete(`/api/job_offers/${id}`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    /**
     * Resource: Job Offers
     * GET, PUT, POST, DELETE
     */

    getUserJobOffers(id) {
      return Vue.http.get(`/api/users/${id}/job_offers`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    getJobOffer(id) {
      return Vue.http.get(`/api/job_requests/${id}`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    storeJobOffer(data) {
      return Vue.http.post(`/api/job_offers`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
          }
        })
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    updateJobOffer(id, data) {
      return Vue.http.put(`/api/job_offers/${id}`, data, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
          }
        })
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    },

    deleteJobOffer(id) {
      return Vue.http.delete(`/api/job_offers/${id}`)
        .then((response) => Promise.resolve(response.body))
        .catch((error) => Promise.reject(error));
    }
}