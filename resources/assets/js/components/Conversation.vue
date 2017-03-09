<template>
    <section class="dashboard__inbox">
        <loading></loading>
        <h3 v-if="!loading" class="dashboard__title">{{ partner.name }}</h3>
        <p v-if="!loading">{{ conversation.messages.length }} messages.</p>
        <textarea id="message" name="message" v-model="newMessage.message" placeholder="New Message..." @input="resizeTextarea()"></textarea>
        <a class="button is-outline is-animated" @click="submitMessage">
          <span>Submit</span>
          <span class="icon">
            <i class="mdi mdi-chevron-right"></i>
          </span>
        </a>
        <message v-for="message in conversation.messages" :message="message"></message>

        <router-link to="/dashboard/inbox" class="button is-outline">Back</router-link>
    </section>
</template>

<script>
    import MessageCard from './MessageCard.vue';
    import LoadingSpinner from './LoadingSpinner.vue'
    export default {
        components: {
            message: MessageCard,
            loading: LoadingSpinner
        },
        data() {
          return {
            newMessage: {
              message: '',
              conversation_id: '',
              recipient_id: ''
            },
            conversation: {
              id: '',
              user_one: '',
              user_two: '',
              messages: []
            }
          }
        },
        computed: {
            /**
             * Get the conversation partner
             */
            partner() {
              return (this.conversation.user_one.id === this.user.id) ? this.conversation.user_two : this.conversation.user_one;
            },

            user()  {
              return this.$store.state.user;
            },

            /**
             * Current loading status (loading is true if data is being loaded asynchronously)
             * @returns {Boolean}
             */
            loading() {
                return this.$store.state.loading;
            }
        },

        mounted: function () {
            // Fetch AMV from Vuex. If not present in Vuex an API call gets made
            this.$store.dispatch('FETCH_CONVERSATIONS')
              .then((response) => {
                this.$store.dispatch('FETCH_CONVERSATION', this.$route.params.id)
                  .then((response) => {
                    this.conversation = response;
                  })
              })          
        },

        methods: {
          /**
            * Automaticaly expand (or reduce) the description textarea on user input
            */
            resizeTextarea() {
                const textarea = event.currentTarget;
                textarea.style.height = "";
                textarea.style.height = textarea.scrollHeight + "px";
            },

            submitMessage() {
              this.newMessage.conversation_id = this.conversation.id;
              this.newMessage.recipient_id = this.partner.id;
              this.$store.dispatch('STORE_MESSAGE', this.newMessage)
                .then(() => {
                  this.newMessage.message = '';
                });
            }
        }
    }
</script>