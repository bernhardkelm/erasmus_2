<template>
    <section class="dashboard__form form--profile">
        <loading></loading>
        <div v-show="!loading">
          <h3 class="dashboard__title">Edit Profile</h3>
          <h5 class="form__title">Account Information</h5>
          <div class="row">
            <div class="column is-6">
              <label for="name">Name</label>
              <input id="name" v-model="userObject.name" type="text">
            </div>
            <div class="column is-6">
              <label for="email">Email</label>
              <input id="email" v-model="userObject.email" type="text">
            </div>
          </div>
          <div class="row">
            <div class="column is-6">
              <label for="password">New Password</label>
              <input id="password"  v-model="password" type="password">
            </div>
            <div class="column is-6">
              <label for="confirm">Repeat Password</label>
              <input id="confirm" v-model="confirmPassword" type="password">
            </div>
          </div>
          <hr />
          <h5 class="form__title">Personal Information</h5>
          <div class="row">
            <div class="column is-6">
              <label for="languages">Languages</label>
              <input id="languages"  v-model="userObject.languages" type="text">
            </div>
            <div class="column is-6">
              <label for="major">Major</label>
              <input id="major" v-model="userObject.major" type="text">
            </div>
          </div>
          <div class="row">
            <div class="column is-6">
              <select id="country">
                <option>Select a Country</option>
                <option v-for="country in countries" :value="country.id">{{ country.name }}</option>
              </select>
            </div>
          </div>
          <hr />
          <h5 class="form__title">Social Information</h5>
          <div class="row">
            <div class="column is-6">
              <label for="twitter">Twitter</label>
              <input id="twitter"  v-model="userObject.twitter" type="text">
            </div>
            <div class="column is-6">
              <label for="facebook">Facebook</label>
              <input id="facebook" v-model="userObject.facebook" type="text">
            </div>
          </div>
          <hr />
          <h5 class="form__title">About</h5>
          <p>Write something about yourself.</p>
          <textarea v-model="userObject.about"></textarea>
          <hr />
          <h5 class="form__title">Files</h5>
          <div class="row">
            <div class="column is-4">
              <div class="file-field">
                <label for="file" class="button is-outline">
                  <span>Upload Profile Picture</span>
                  <span class="icon">
                    <i class="mdi mdi-cloud-upload"></i>
                  </span>
                </label/>
                <input type="file" id="file">
                <div class="file-path">Please select a file</div>
              </div>
            </div>
            <div class="column is-4">
              <div class="file-field">
                <label for="file" class="button is-outline">
                  <span>Upload Resume (PDF)</span>
                  <span class="icon">
                    <i class="mdi mdi-cloud-upload"></i>
                  </span>
                </label/>
                <input type="file" id="file">
                <div class="file-path">Please select a file</div>
              </div>
            </div>
            <div class="column is-4">
              <div class="file-field">
                <label for="file" class="button is-outline">
                  <span>Upload Profile Header</span>
                  <span class="icon">
                    <i class="mdi mdi-cloud-upload"></i>
                  </span>
                </label/>
                <input type="file" id="file">
                <div class="file-path">Please select a file</div>
              </div>
            </div>
          </div>
          <a class="button is-info">Save</a>
        </div>
    </section>
</template>

<script>
    import LoadingSpinner from './LoadingSpinner.vue'

    export default {
        data() {
            return {
                userObject: {
                    name: '',
                    email: '',
                    country: '',
                    major: '',
                    languages: '',
                    twitter: '',
                    facebook: '',
                    about: ''
                },
                submitErrors: [],
                password: '',
                confirmPassword: ''
            }
        },
        computed: {
            countries() {
              return this.$store.state.countries;
            },
           /**
            * Get the avatar URL. In case the user doesn't have an avatar, show default one.
            * @returns {String}
            */
            avatar() {
                return this.userObject.avatar || '/images/default_avatar.jpg'
            },
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
            }
        },
        components: {
            loading: LoadingSpinner
        },
        mounted: function() {
            // Fetch current user from Vuex or API
            this.$store.dispatch('FETCH_COUNTRIES');
            this.$store.dispatch('FETCH_USER')
                .then((response) => {
                    // this.userObject = response would create a copy by reference! All changes to userObject
                    // would cascade down to the store object as well.
                    // JSON.parse(JSON.stringify) in order to create a new copy of the user, not by reference.
                    // Needs to be done so that the user changes can be disregarded once he clicks 'Cancel'
                    this.userObject = JSON.parse(JSON.stringify(response));
                });
        },
        methods: {
            /**
             * Submit the form and update the user
             */
            submit() {
                // Reset errors
                // this.submitErrors = [];
                // this.saveButtonDisabled = true;
                // this.saveButtonStatus = 'Saving...';
                // const elAvatar = document.getElementById('avatar');
                // const files = elAvatar.files;
                // const formData = new FormData();
                // formData.append('location', this.userObject.location);
                // formData.append('studio', this.userObject.studio);
                // formData.append('website', this.userObject.website);
                // // Check whether email field is empty
                // if (this.userObject.email.length === 0) {
                //     this.saveButtonStatus = 'Failed';
                //     this.pushError("You must specify an email address.");
                //     return;
                // }
                // formData.append('email', this.userObject.email);
                // // Check whether a new password has been entered and if they match
                // if (this.password.length > 0) {
                //     if (this.password !== this.confirmPassword) {
                //         this.saveButtonStatus = 'Failed';
                //         this.pushError("Your passwords didn't match.");
                //         return;
                //     }
                //     formData.append('password', this.password);
                // }
                // // Check if avatar file has been selected
                // if (files.length) {
                //     if (!this.validateImage(files[0])) {
                //         this.saveButtonStatus = 'Failed';
                //         return;
                //     }
                //     formData.append('avatar', files[0]);
                // }
                // // Laravel bug: multipart/form-data needs to be POST. Specify custom method PUT.
                // formData.append('_method', 'PUT');
                // this.$store.dispatch('PATCH_USER', {
                //         id: this.userObject.id,
                //         data: formData
                // })
                // .then((response) => {
                //     this.userObject.avatar = response.avatar;
                //     this.$store.commit('SET_USER', this.userObject);
                //     this.updateAvatar(response.avatar);
                //     this.saveButtonStatus = 'Saved';
                //     this.cancelButtonStatus = 'Back';
                // })
                // .catch((error) => {
                //     this.saveButtonStatus = 'Failed';
                //     if (typeof error.body === 'object') {
                //         for (let key in error.body) {
                //             this.submitErrors.push(error.body[key][0]);
                //         }
                //     } else {
                //         this.submitErrors.push(error.status + ": Server Error. Please try again later.");
                //     }
                // });
            }
        }
    }
</script>