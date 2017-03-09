<template>
  <div v-show="loading" class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
</template>

<script>
    export default {
        computed: {
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