<template>
    <section class="dashboard__inbox">
        <loading></loading>
        <h3 v-if="!loading" class="dashboard__title">Inbox</h3>
        <p v-if="!loading">{{ conversations.length }} conversations in total.</p>
        <div class="clearfix"></div>
        <conversation v-for="conversation in conversations" :conversation="conversation"></conversation>
    </section>
</template>

<script>
    import ConversationCard from './ConversationCard.vue';
    import LoadingSpinner from './LoadingSpinner.vue'
    export default {
        components: {
            conversation: ConversationCard,
            loading: LoadingSpinner
        },
        computed: {
            /**
             * List of all conversations by this user.
             * @returns {Array}
             */
            conversations() {
                return this.$store.getters.conversations;
            },
            /**
             * Current loading status (loading is true if data is being loaded asynchronously)
             * @returns {Boolean}
             */
            loading() {
                return this.$store.state.loading;
            }
        }
    }
</script>