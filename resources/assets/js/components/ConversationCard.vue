<template>
  <router-link to="'/dashboard/inbox/' + conversation.id + '/'">
    <div class="conversation__card">
      <img :src="partner.picture">
      <h4>{{ partner.name }}</h4>
      <p>{{ conversation.latest_message.message }}</p>
    </div>
  </router-link>
</template>

<script>
    export default {
        props: ['conversation'],
        computed: {
          /**
           * Get the conversation partner
           */
          partner() {
            return (this.conversation.user_one.id === this.user.id) ? this.conversation.user_two : this.conversation.user_one;
          },
          user()  {
            return this.$store.state.user;
          }
        }
    }
</script>