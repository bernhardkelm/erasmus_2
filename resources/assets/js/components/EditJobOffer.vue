<template>
    <section class="dashboard__requests">
        <loading></loading>
        <div v-if="!loading">
          <h3 class="dashboard__title">Edit Job Offer</h3>
          <div class="clearfix"></div>
          
          <div class="field">
            <label for="title">Titel</label>
            <input type="text" id="title" v-model="jobOffer.title">
          </div>
          <div class="field">
            <label for="body">Description</label>
            <textarea id="body" v-model="jobOffer.body"></textarea>
          </div>

          <div class="button-group">
            <button 
                v-bind:disabled="saveButtonDisabled"
                v-bind:class="saveButtonClasses"
                class="button is-info" @click="submit">{{ saveButtonStatus }}</button>
            <router-link to="/dashboard/joboffers" class="button is-outline">Back</router-link>
            <button 
                class="destroy button is-danger" @click="destroy">{{ deleteButtonStatus }}</button>
          </div>
              
        </div>

        <div v-if="showErrors">
          <p v-for="error in submitErrors" class="error is-danger">
            {{ error }}
          </p>
        </div>
    </section>
</template>

<script>
    import LoadingSpinner from './LoadingSpinner.vue'
    export default {
        data() {
            return {
                jobOffer: {
                    title: '',
                    body: ''
                },
                submitErrors: [],
                saveButtonDisabled: false,
                saveButtonStatus: 'Save',
                deleteButtonStatus: 'Delete'
            }
        },
        computed: {
            /**
             * Current loading status (loading is true if data is being loaded asynchronously)
             * @returns {Boolean}
             */
            loading() {
                return this.$store.state.loading;
            },
            /**
             * Only show errors when the attempt to save just failed.
             * @returns {Boolean}
             */ 
            showErrors: function() {
                return this.submitErrors.length > 0 && this.saveButtonStatus === 'Failed';
            },

            saveButtonClasses: function() {
                return {
                    'is-info': this.saveButtonStatus === 'Save' || this.saveButtonStatus === 'Saving...',
                    'is-loading': this.saveButtonStatus === 'Saving...',
                    'is-success': this.saveButtonStatus === 'Saved',
                    'is-error': this.saveButtonStatus === 'Failed'
                }
            },
        },
        components: {
            loading: LoadingSpinner
        },
        mounted: function() {
            // Fetch current user from Vuex or API
            this.$store.dispatch('FETCH_OFFER', this.$route.params.id)
              .then((response) => {
                this.jobOffer = JSON.parse(JSON.stringify(response));
              });
        },
        methods: {
            /**
             * Submit the form and update the user
             */
            submit() {
                // Reset errors
                this.submitErrors = [];
                this.saveButtonDisabled = true;
                this.saveButtonStatus = 'Saving...';
                this.$store.dispatch('PATCH_OFFER', {
                  id: this.jobOffer.id,
                  data: this.jobOffer
                })
                  .then((response) => {
                      this.saveButtonStatus = 'Saved';
                      this.saveButtonDisabled = true;
                  })
                .catch((error) => {
                  this.saveButtonStatus = 'Failed';
                    if (typeof error.body === 'object') {
                        for (let key in error.body) {
                            this.submitErrors.push(error.body[key]);
                        }
                    } else {
                        this.submitErrors.push(error.status + ": Server Error. Please try again later.");
                    }
                });
            },

            destroy() {
              this.deleteButtonStatus = 'Deleting...';
              this.$store.dispatch('DESTROY_OFFER', this.jobOffer.id)
                .then(() => {
                  this.deleteButtonStatus = 'Deleted';
                })
                .catch((error) => {
                  this.deleteButtonStatus = 'Failed';
                    if (typeof error.body === 'object') {
                        for (let key in error.body) {
                            this.submitErrors.push(error.body[key]);
                        }
                    } else {
                        this.submitErrors.push(error.status + ": Server Error. Please try again later.");
                    }
                });
            },

            pushError: function(error) {
                if (this.submitErrors.indexOf(error) === -1) {
                    this.submitErrors.push(error);
                }
            }
        }
    }
</script>