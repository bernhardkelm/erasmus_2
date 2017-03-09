<template>
  <router-link :to="'/dashboard/inbox/' + conversation.id">
    <div :class="[{ unread: isUnread }, 'conversation__card']">
      <img :src="picture" />
      <div class="conversation__info">
        <h4>{{ partner.name }}</h4>
        <p>{{ conversation.latest_message.message }} by <em>{{ sender }}</em></p>
      </div>
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

          picture() {
            return this.partner.picture || '/images/default_avatar.jpg'
          },

          user()  {
            return this.$store.state.user;
          },

          isUnread() {
            return (this.conversation.latest_message.recipient_id === this.user.id) && 
              (this.conversation.latest_message.is_seen === 0);
          },

          sender() {
            return (this.conversation.latest_message.sender.id === this.user.id) ? 'You' : this.conversation.latest_message.sender.name;
          }
        }
    }
</script>