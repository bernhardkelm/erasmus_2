import Vuex from 'vuex'
import api from '../services/api'


const store = new Vuex.Store({
    state: {
        /**
         * Currently authenticated user
         * @type {Object}
         */
        user: {},
        /**
         * Complete conversations by the current user
         * @type {Object}
         */
        conversations: {},
        /**
         * List of all conversations (just an overview with latest message for each)
         * @type {Array}
         */
        conversationOverview: [],
        /**
         * List of all job requests by the current user
         * @type {Object}
         */
        jobRequests: {},
        /**
         * List of all job offers by the current user
         * @type {Object}
         */
        jobOffers: {},
        /**
         * List of all available countries
         * @type {Array}
         */
        countries: [],
        /**
         * Currently fetching data from the API?
         * @type {Boolean}
         */
        loading: false,
        /**
         * Error message
         * @type {String}
         */
        failure: ''
    },

    actions: {
        /**
         * Fetch a user. First check if the user is already stored in Vuex, if that is the case
         * then simply return it. Otherwise make a call to the API and then store in Vuex.
         */
        FETCH_USER: ({commit, state}) => {
            const isEmpty = Object.keys(state.user).length === 0
            if (isEmpty) commit('SET_LOADING', { val: true });
            return !isEmpty
                ? Promise.resolve(state.user)
                : api.getUser()
                .then((response) => {
                    commit('SET_LOADING', { val: false });
                    commit('SET_USER', response);
                    return Promise.resolve(response);
                })
                .catch((error) => {
                    commit('SET_LOADING', { val: false });
                    commit('FAILURE', error)
                });
        },

        /**
         * Fetch all job requests of a user by the user's ID. Once done, store in Vuex
         */
        FETCH_REQUESTS: ({commit}, user) => {
            commit('SET_LOADING', { val: true });
            return api.getUserJobRequests(user.id)
                .then((response) => {
                    commit('SET_LOADING', { val: false });
                    commit('SET_REQUESTS', response)
                })
                .catch((error) => {
                    commit('SET_LOADING', { val: false });
                    commit('FAILURE', error)
                });
        },

        /**
         * Fetch all job offers of a user by the user's ID. Once done, store in Vuex
         */
        FETCH_OFFERS: ({commit}, user) => {
            commit('SET_LOADING', { val: true });
            return api.getUserJobOffers(user.id)
                .then((response) => {
                    commit('SET_LOADING', { val: false });
                    commit('SET_OFFERS', response)
                })
                .catch((error) => {
                    commit('SET_LOADING', { val: false });
                    commit('FAILURE', error)
                });
        },

        /**
         * Fetch a single job request. First check if the job request is already stored in Vuex, 
         * if that is the case then simply return it. Otherwise make a call to the API.
         */
        FETCH_REQUEST: ({commit, state}, id) => {
          const exists = id in state.jobRequests;
            if (!exists) commit('SET_LOADING', { val: true });
            return exists
              ? Promise.resolve(state.jobRequests[id])
              : api.getJobRequest(id)
                .then((response) => {
                  commit('SET_LOADING', { val: false });
                  return Promise.resolve(response);
                })
                .catch((error) => {
                  commit('SET_LOADING', { val: false });
                  return Promise.reject(error);
                });
        },

        /**
         * Fetch a single job offer. First check if the job offer is already stored in Vuex, 
         * if that is the case then simply return it. Otherwise make a call to the API.
         */
        FETCH_OFFER: ({commit, state}, id) => {
          const exists = id in state.jobOffers;
            if (!exists) commit('SET_LOADING', { val: true });
            return exists
              ? Promise.resolve(state.jobOffers[id])
              : api.getJobOffer(id)
                .then((response) => {
                  commit('SET_LOADING', { val: false });
                  return Promise.resolve(response);
                })
                .catch((error) => {
                  commit('SET_LOADING', { val: false });
                  return Promise.reject(error);
                });
        },

        /**
         * Fetch all countries from the API. Once done, store in Vuex
         */
        FETCH_COUNTRIES: ({commit}) => {
            commit('SET_LOADING', { val: true });
            return api.getCountries()
                .then((response) => {
                    commit('SET_LOADING', { val: false });
                    commit('SET_COUNTRIES', response)
                    return Promise.resolve(response);
                })
                .catch((error) => {
                    commit('SET_LOADING', { val: false });
                    commit('FAILURE', error)
                });
        },

        /**
         * Update a user
         */
        PATCH_USER: ({commit}, payload) => {
            return api.updateUser(payload.id, payload.data)
                .then((response) => Promise.resolve(response))
                .catch((error) => Promise.reject(error));
        },

        /**
         * Fetch a list of all conversations, then store.
         */
        FETCH_CONVERSATIONS: ({state, commit}) => {
          const isEmpty = Object.keys(state.conversations).length === 0
          if (isEmpty) commit('SET_LOADING', { val: true });
          return !isEmpty
            ? Promise.resolve(state.conversations)
            : api.getUserConversations()
                .then((response) => {
                    commit('SET_LOADING', { val: false });
                    commit('SET_CONVERSATIONS', response)
                })
                .catch((error) => {
                    commit('SET_LOADING', { val: false });
                    commit('FAILURE', error)
                });
        },

        /**
         * Fetch a single conversation. First check if the conversation is already stored in Vuex, 
         * if that is the case then simply return it. Otherwise make a call to the API.
         */
        FETCH_CONVERSATION: ({commit, state}, id) => {
          const exists = (id in state.conversations) && 
              (state.conversations[id].hasOwnProperty('messages'));
            if (!exists) commit('SET_LOADING', { val: true });
            return exists
              ? Promise.resolve(state.conversations[id])
              : api.getConversation(id)
                .then((response) => {
                  commit('SET_LOADING', { val: false });
                  commit('SET_CONVERSATION', response);
                  return Promise.resolve(response);
                })
                .catch((error) => {
                  commit('SET_LOADING', { val: false });
                  return Promise.reject(error);
                });
        },

        /**
         * Delete an existing conversation from database and/or Vuex
         */
        DESTROY_CONVERSATION: ({commit}, conversation) => {
            return api.deleteConversation(conversation.id)
                .then((response) => {
                    commit('DELETE_CONVERSATION', conversation);
                })
                .catch((error) => Promise.reject(error));
        },

        /** 
         * Store a new message in database and Vuex
         */
        STORE_MESSAGE: ({commit}, message) => {
            return api.storeMessage(message)
                .then((response) => {
                    commit('ADD_MESSAGE', response);
                    return Promise.resolve(response);
                })
                .catch((error) => Promise.reject(error));
        },


        /**
         * Store a new job request in database and Vuex
         */
        STORE_REQUEST: ({commit}, request) => {
            return api.storeJobRequest(request)
                .then((response) => {
                    commit('ADD_REQUEST', response);
                    return Promise.resolve(response)
                })
                .catch((error) => Promise.reject(error));
        },

        /**
         * Store a new job offer in database and Vuex
         */
        STORE_OFFER: ({commit}, offer) => {
            return api.storeJobOffer(offer)
                .then((response) => {
                    return Promise.resolve(response)
                })
                .catch((error) => Promise.reject(error));
        },

        /**
         * Update an existing job request in database and Vuex
         */
        PATCH_REQUEST: ({commit}, payload) => {
            return api.updateJobRequest(payload.id, payload.data)
                .then((response) => Promise.resolve(response))
                .catch((error) => Promise.reject(error));
        },

        /**
         * Update an existing job offer in database and Vuex
         */
        PATCH_OFFER: ({commit}, payload) => {
            return api.updateJobOffer(payload.id, payload.data)
                .then((response) => Promise.resolve(response))
                .catch((error) => Promise.reject(error));
        },

        /**
         * Delete an existing job request from database and/or Vuex
         */
        DESTROY_REQUEST: ({commit}, id) => {
            return api.deleteJobRequest(id)
                .then((response) => {
                    commit('DELETE_REQUEST', id);
                })
                .catch((error) => Promise.reject(error));
        },

        /**
         * Delete an existing job offer from database and/or Vuex
         */
        DESTROY_OFFER: ({commit}, id) => {
            return api.deleteJobOffer(id)
                .then((response) => {
                    commit('DELETE_OFFER', id);
                })
                .catch((error) => Promise.reject(error));
        }

    },

    mutations: {
        
        FAILURE: (state, error) => {
          state.failure = error.body;
        },

        SET_USER: (state, user) => {
          for (let key in user) {
            if (user[key] === 'null') user[key] = '';
          }
          state.user = user;
        },

        ADD_MESSAGE: (state, message) => {
            state.conversations[message.conversation_id].messages.unshift(message);
        },

        SET_REQUESTS: (state, requests) => {
          requests.forEach(request => {
            Vue.set(state.jobRequests, request.id, request);
          });
        },

        ADD_REQUEST: (state, request) => {
            Vue.set(state.jobRequests, request.id, request);
        },

        UPDATE_REQUEST: (state, request) => {
            state.jobRequests[request.id] = request;
        },

        DELETE_REQUEST: (state, id) => {
            Vue.delete(state.jobRequests, id);
        },

        SET_OFFERS: (state, offers) => {
          offers.forEach(offer => {
            Vue.set(state.jobOffers, offer.id, offer);
          });
        },

        ADD_OFFER: (state, offer) => {
            Vue.set(state.jobOffers, offer.id, offer);
        },

        UPDATE_OFFER: (state, offer) => {
            state.jobOffers[offer.id] = offer;
        },

        DELETE_OFFER: (state, id) => {
            Vue.delete(state.jobOffers, id);
        },

        SET_COUNTRIES: (state, countries) => {
          state.countries = countries;
        },

        SET_CONVERSATIONS: (state, conversations) => {
          conversations.forEach(conversation => {
            Vue.set(state.conversations, conversation.id, conversation);
          });
        },

        SET_CONVERSATION: (state, conversation) => {
          Vue.set(state.conversations, conversation.id, conversation);
        },

        DELETE_CONVERSATION: (state, id) => {
          Vue.delete(state.conversations, id);
        },

        SET_LOADING: (state, {val}) => {
          state.loading = val;
        }
    },

    getters: {
        /**
         * Map Job Requests object to an array
         */
        requests: state => {
            return Object.keys(state.jobRequests).map(key => state.jobRequests[key]);
        },
        /**
         * Map Job Offers object to an array
         */
        offers: state => {
            return Object.keys(state.jobOffers).map(key => state.jobOffers[key]);
        },
        /**
         * Map Job Requests object to an array
         */
        conversations: state => {
            return Object.keys(state.conversations).map(key => state.conversations[key]);
        }
    }
})

export default store