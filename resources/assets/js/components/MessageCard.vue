<template>
  <div :class="[{ unread: isUnread }, 'message__card']">
    <img :src="picture" />
    <div class="message__info">
      <h4>{{ message.sender.name }}</h4><span class="message__date">{{ message.readableCreatedAt }} ago</span>
      <p>{{ message.message }}</p>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['message'],
        computed: {
          picture() {
            return this.message.sender.picture || '/images/default_avatar.jpg'
          },

          user()  {
            return this.$store.state.user;
          },

          isUnread() {
            return (this.message.sender.id !== this.user.id) && (this.message.is_seen === 0);
          },
        }
    }
</script>