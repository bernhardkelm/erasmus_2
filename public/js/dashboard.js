/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/LoadingSpinner.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LoadingSpinner.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21fc359e", Component.options)
  } else {
    hotAPI.reload("data-v-21fc359e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(18);
/**
 * Dashboard
 */




var vm = new Vue({
    store: __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */],
    router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */],
    el: '#app',

    mounted: function mounted() {
        this.loadData();
    },

    methods: {
        /**
         * Load user and conversation data and store it in Vuex
         */
        loadData: function loadData() {
            this.$store.dispatch('FETCH_USER');
            this.$store.dispatch('FETCH_CONVERSATIONS');
        }
    }
});

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            userObject: {
                name: '',
                email: '',
                country_id: '',
                location: '',
                twitter: '',
                facebook: '',
                about: ''
            },
            countries: [],
            submitErrors: [],
            password: '',
            confirmPassword: '',
            fullError: '',
            saveButtonDisabled: false,
            saveButtonStatus: 'Save'
        };
    },

    computed: {
        /**
         * Current loading status (loading is true if data is being loaded asynchronously)
         * @returns {Boolean}
         */
        loading: function loading() {
            return this.$store.state.loading;
        },

        /**
         * Only show errors when the attempt to save just failed.
         * @returns {Boolean}
         */
        showErrors: function showErrors() {
            return this.submitErrors.length > 0 && this.saveButtonStatus === 'Failed';
        },

        saveButtonClasses: function saveButtonClasses() {
            return {
                'is-info': this.saveButtonStatus === 'Save' || this.saveButtonStatus === 'Saving...',
                'is-loading': this.saveButtonStatus === 'Saving...',
                'is-success': this.saveButtonStatus === 'Saved',
                'is-error': this.saveButtonStatus === 'Failed'
            };
        }
    },
    components: {
        loading: __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        // Fetch current user from Vuex or API
        this.$store.dispatch('FETCH_COUNTRIES').then(function (response) {
            response.forEach(function (country) {
                country[value] = country[id];
                country[text] = country[name];
            });
            _this.countries = response;
        });
        this.$store.dispatch('FETCH_USER').then(function (response) {
            // this.userObject = response would create a copy by reference! All changes to userObject
            // would cascade down to the store object as well.
            // JSON.parse(JSON.stringify) in order to create a new copy of the user, not by reference.
            // Needs to be done so that the user changes can be disregarded once he clicks 'Cancel'
            _this.userObject = JSON.parse(JSON.stringify(response));
        });
    },
    methods: {
        /**
         * Submit the form and update the user
         */
        submit: function submit() {
            var _this2 = this;

            // Reset errors
            this.submitErrors = [];
            this.saveButtonDisabled = true;
            this.saveButtonStatus = 'Saving...';
            var elAvatar = document.getElementById('avatar');
            var elHeader = document.getElementById('header');
            var avFiles = elAvatar.files;
            var heFiles = elHeader.files;

            var formData = new FormData();
            if (this.userObject.location && this.userObject.location.length > 0) formData.append('location', this.userObject.location);
            if (this.userObject.twitter && this.userObject.twitter.length > 0) formData.append('twitter', this.userObject.twitter);
            if (this.userObject.facebook && this.userObject.facebook.length > 0) formData.append('facebook', this.userObject.facebook);
            if (this.userObject.about && this.userObject.about.length > 0) formData.append('about', this.userObject.about);

            if (this.userObject.country_id && this.userObject.country_id.length > 0) formData.append('country_id', this.userObject.country_id);

            // Check whether name field is empty
            if (this.userObject.name.length === 0) {
                this.saveButtonStatus = 'Failed';
                this.pushError("You must specify a name.");
                return;
            }
            formData.append('name', this.userObject.name);

            // Check whether email field is empty
            if (this.userObject.email.length === 0) {
                this.saveButtonStatus = 'Failed';
                this.pushError("You must specify an email address.");
                return;
            }

            formData.append('email', this.userObject.email);

            // Check whether a new password has been entered and if they match
            if (this.password.length > 0) {
                if (this.password !== this.confirmPassword) {
                    this.saveButtonStatus = 'Failed';
                    this.pushError("Your passwords didn't match.");
                    return;
                }
                formData.append('password', this.password);
            }

            // Check if avatar file has been selected
            if (avFiles.length) {
                if (!this.validateImage(avFiles[0])) {
                    this.saveButtonStatus = 'Failed';
                    return;
                }
                formData.append('picture', avFiles[0]);
            }

            if (heFiles.length) {
                if (!this.validateImage(heFiles[0])) {
                    this.saveButtonStatus = 'Failed';
                    return;
                }
                formData.append('header', heFiles[0]);
            }

            // Laravel bug: multipart/form-data needs to be POST. Specify custom method PUT.
            formData.append('_method', 'PUT');
            this.$store.dispatch('PATCH_USER', {
                id: this.userObject.id,
                data: formData
            }).then(function (response) {
                _this2.userObject.picture = response.picture || '/images/default_logo.png';
                _this2.$store.commit('SET_USER', _this2.userObject);
                _this2.saveButtonStatus = 'Saved';
                _this2.saveButtonDisabled = true;
            }).catch(function (error) {
                _this2.fullError = error.body;
                _this2.saveButtonStatus = 'Failed';
                if (_typeof(error.body) === 'object') {
                    for (var key in error.body) {
                        _this2.submitErrors.push(error.body[key]);
                    }
                } else {
                    _this2.submitErrors.push(error.status + ": Server Error. Please try again later.");
                }
            });
        },
        validateImage: function validateImage(file) {
            if (!/\.(png|jpeg|jpg)$/i.test(file.name)) {
                this.pushError("Must be a valid image file (.PNG, .JPG or .JPEG allowed).");
                return false;
            }
            if (!(file.size / 1024 < 2000)) {
                this.pushError("Image must be smaller than 2MB.");
                return false;
            }
            return true;
        },


        pushError: function pushError(error) {
            if (this.submitErrors.indexOf(error) === -1) {
                this.submitErrors.push(error);
            }
        }
    }
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MessageCard_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MessageCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__MessageCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingSpinner_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__LoadingSpinner_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    message: __WEBPACK_IMPORTED_MODULE_0__MessageCard_vue___default.a,
    loading: __WEBPACK_IMPORTED_MODULE_1__LoadingSpinner_vue___default.a
  },
  data: function data() {
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
    };
  },

  computed: {
    /**
     * Get the conversation partner
     */
    partner: function partner() {
      return this.conversation.user_one.id === this.user.id ? this.conversation.user_two : this.conversation.user_one;
    },
    user: function user() {
      return this.$store.state.user;
    },


    /**
     * Current loading status (loading is true if data is being loaded asynchronously)
     * @returns {Boolean}
     */
    loading: function loading() {
      return this.$store.state.loading;
    }
  },

  mounted: function mounted() {
    var _this = this;

    // Fetch AMV from Vuex. If not present in Vuex an API call gets made
    this.$store.dispatch('FETCH_CONVERSATIONS').then(function (response) {
      _this.$store.dispatch('FETCH_CONVERSATION', _this.$route.params.id).then(function (response) {
        _this.conversation = response;
      });
    });
  },

  methods: {
    /**
      * Automaticaly expand (or reduce) the description textarea on user input
      */
    resizeTextarea: function resizeTextarea() {
      var textarea = event.currentTarget;
      textarea.style.height = "";
      textarea.style.height = textarea.scrollHeight + "px";
    },
    submitMessage: function submitMessage() {
      var _this2 = this;

      this.newMessage.conversation_id = this.conversation.id;
      this.newMessage.recipient_id = this.partner.id;
      this.$store.dispatch('STORE_MESSAGE', this.newMessage).then(function () {
        _this2.newMessage.message = '';
      });
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  props: ['conversation'],
  computed: {
    /**
     * Get the conversation partner
     */
    partner: function partner() {
      return this.conversation.user_one.id === this.user.id ? this.conversation.user_two : this.conversation.user_one;
    },
    picture: function picture() {
      return this.partner.picture || '/images/default_avatar.jpg';
    },
    user: function user() {
      return this.$store.state.user;
    },
    isUnread: function isUnread() {
      return this.conversation.latest_message.recipient_id === this.user.id && this.conversation.latest_message.is_seen === 0;
    },
    sender: function sender() {
      return this.conversation.latest_message.sender.id === this.user.id ? 'You' : this.conversation.latest_message.sender.name;
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            jobOffer: {
                title: '',
                body: ''
            },
            submitErrors: [],
            saveButtonDisabled: false,
            saveButtonStatus: 'Save'
        };
    },

    computed: {
        /**
         * Current loading status (loading is true if data is being loaded asynchronously)
         * @returns {Boolean}
         */
        loading: function loading() {
            return this.$store.state.loading;
        },

        /**
         * Only show errors when the attempt to save just failed.
         * @returns {Boolean}
         */
        showErrors: function showErrors() {
            return this.submitErrors.length > 0 && this.saveButtonStatus === 'Failed';
        },

        saveButtonClasses: function saveButtonClasses() {
            return {
                'is-info': this.saveButtonStatus === 'Save' || this.saveButtonStatus === 'Saving...',
                'is-loading': this.saveButtonStatus === 'Saving...',
                'is-success': this.saveButtonStatus === 'Saved',
                'is-error': this.saveButtonStatus === 'Failed'
            };
        }
    },
    components: {
        loading: __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default.a
    },
    methods: {
        /**
         * Submit the form and update the user
         */
        submit: function submit() {
            var _this = this;

            // Reset errors
            this.submitErrors = [];
            this.saveButtonDisabled = true;
            this.saveButtonStatus = 'Saving...';
            this.$store.dispatch('STORE_OFFER', this.jobOffer).then(function (response) {
                _this.saveButtonStatus = 'Saved';
                _this.saveButtonDisabled = true;
            }).catch(function (error) {
                _this.saveButtonStatus = 'Failed';
                if (_typeof(error.body) === 'object') {
                    for (var key in error.body) {
                        _this.submitErrors.push(error.body[key]);
                    }
                } else {
                    _this.submitErrors.push(error.status + ": Server Error. Please try again later.");
                }
            });
        },


        pushError: function pushError(error) {
            if (this.submitErrors.indexOf(error) === -1) {
                this.submitErrors.push(error);
            }
        }
    }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            jobRequest: {
                title: '',
                body: ''
            },
            submitErrors: [],
            saveButtonDisabled: false,
            saveButtonStatus: 'Save'
        };
    },

    computed: {
        /**
         * Current loading status (loading is true if data is being loaded asynchronously)
         * @returns {Boolean}
         */
        loading: function loading() {
            return this.$store.state.loading;
        },

        /**
         * Only show errors when the attempt to save just failed.
         * @returns {Boolean}
         */
        showErrors: function showErrors() {
            return this.submitErrors.length > 0 && this.saveButtonStatus === 'Failed';
        },

        saveButtonClasses: function saveButtonClasses() {
            return {
                'is-info': this.saveButtonStatus === 'Save' || this.saveButtonStatus === 'Saving...',
                'is-loading': this.saveButtonStatus === 'Saving...',
                'is-success': this.saveButtonStatus === 'Saved',
                'is-error': this.saveButtonStatus === 'Failed'
            };
        }
    },
    components: {
        loading: __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default.a
    },
    methods: {
        /**
         * Submit the form and update the user
         */
        submit: function submit() {
            var _this = this;

            // Reset errors
            this.submitErrors = [];
            this.saveButtonDisabled = true;
            this.saveButtonStatus = 'Saving...';
            this.$store.dispatch('STORE_REQUEST', this.jobRequest).then(function (response) {
                _this.saveButtonStatus = 'Saved';
                _this.saveButtonDisabled = true;
            }).catch(function (error) {
                _this.saveButtonStatus = 'Failed';
                if (_typeof(error.body) === 'object') {
                    for (var key in error.body) {
                        _this.submitErrors.push(error.body[key]);
                    }
                } else {
                    _this.submitErrors.push(error.status + ": Server Error. Please try again later.");
                }
            });
        },


        pushError: function pushError(error) {
            if (this.submitErrors.indexOf(error) === -1) {
                this.submitErrors.push(error);
            }
        }
    }
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            jobOffer: {
                title: '',
                body: ''
            },
            submitErrors: [],
            saveButtonDisabled: false,
            saveButtonStatus: 'Save',
            deleteButtonStatus: 'Delete'
        };
    },

    computed: {
        /**
         * Current loading status (loading is true if data is being loaded asynchronously)
         * @returns {Boolean}
         */
        loading: function loading() {
            return this.$store.state.loading;
        },

        /**
         * Only show errors when the attempt to save just failed.
         * @returns {Boolean}
         */
        showErrors: function showErrors() {
            return this.submitErrors.length > 0 && this.saveButtonStatus === 'Failed';
        },

        saveButtonClasses: function saveButtonClasses() {
            return {
                'is-info': this.saveButtonStatus === 'Save' || this.saveButtonStatus === 'Saving...',
                'is-loading': this.saveButtonStatus === 'Saving...',
                'is-success': this.saveButtonStatus === 'Saved',
                'is-error': this.saveButtonStatus === 'Failed'
            };
        }
    },
    components: {
        loading: __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        // Fetch current user from Vuex or API
        this.$store.dispatch('FETCH_OFFER', this.$route.params.id).then(function (response) {
            _this.jobOffer = JSON.parse(JSON.stringify(response));
        });
    },
    methods: {
        /**
         * Submit the form and update the user
         */
        submit: function submit() {
            var _this2 = this;

            // Reset errors
            this.submitErrors = [];
            this.saveButtonDisabled = true;
            this.saveButtonStatus = 'Saving...';
            this.$store.dispatch('PATCH_OFFER', {
                id: this.jobOffer.id,
                data: this.jobOffer
            }).then(function (response) {
                _this2.saveButtonStatus = 'Saved';
                _this2.saveButtonDisabled = true;
            }).catch(function (error) {
                _this2.saveButtonStatus = 'Failed';
                if (_typeof(error.body) === 'object') {
                    for (var key in error.body) {
                        _this2.submitErrors.push(error.body[key]);
                    }
                } else {
                    _this2.submitErrors.push(error.status + ": Server Error. Please try again later.");
                }
            });
        },
        destroy: function destroy() {
            var _this3 = this;

            this.deleteButtonStatus = 'Deleting...';
            this.$store.dispatch('DESTROY_OFFER', this.jobOffer.id).then(function () {
                _this3.deleteButtonStatus = 'Deleted';
            }).catch(function (error) {
                _this3.deleteButtonStatus = 'Failed';
                if (_typeof(error.body) === 'object') {
                    for (var key in error.body) {
                        _this3.submitErrors.push(error.body[key]);
                    }
                } else {
                    _this3.submitErrors.push(error.status + ": Server Error. Please try again later.");
                }
            });
        },


        pushError: function pushError(error) {
            if (this.submitErrors.indexOf(error) === -1) {
                this.submitErrors.push(error);
            }
        }
    }
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            jobRequest: {
                title: '',
                body: ''
            },
            submitErrors: [],
            saveButtonDisabled: false,
            saveButtonStatus: 'Save',
            deleteButtonStatus: 'Delete'
        };
    },

    computed: {
        /**
         * Current loading status (loading is true if data is being loaded asynchronously)
         * @returns {Boolean}
         */
        loading: function loading() {
            return this.$store.state.loading;
        },

        /**
         * Only show errors when the attempt to save just failed.
         * @returns {Boolean}
         */
        showErrors: function showErrors() {
            return this.submitErrors.length > 0 && this.saveButtonStatus === 'Failed';
        },

        saveButtonClasses: function saveButtonClasses() {
            return {
                'is-info': this.saveButtonStatus === 'Save' || this.saveButtonStatus === 'Saving...',
                'is-loading': this.saveButtonStatus === 'Saving...',
                'is-success': this.saveButtonStatus === 'Saved',
                'is-error': this.saveButtonStatus === 'Failed'
            };
        }
    },
    components: {
        loading: __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        // Fetch current user from Vuex or API
        this.$store.dispatch('FETCH_REQUEST', this.$route.params.id).then(function (response) {
            _this.jobRequest = JSON.parse(JSON.stringify(response));
        });
    },
    methods: {
        /**
         * Submit the form and update the user
         */
        submit: function submit() {
            var _this2 = this;

            // Reset errors
            this.submitErrors = [];
            this.saveButtonDisabled = true;
            this.saveButtonStatus = 'Saving...';
            this.$store.dispatch('PATCH_REQUEST', {
                id: this.jobRequest.id,
                data: this.jobRequest
            }).then(function (response) {
                _this2.saveButtonStatus = 'Saved';
                _this2.saveButtonDisabled = true;
            }).catch(function (error) {
                _this2.saveButtonStatus = 'Failed';
                if (_typeof(error.body) === 'object') {
                    for (var key in error.body) {
                        _this2.submitErrors.push(error.body[key]);
                    }
                } else {
                    _this2.submitErrors.push(error.status + ": Server Error. Please try again later.");
                }
            });
        },
        destroy: function destroy() {
            var _this3 = this;

            this.deleteButtonStatus = 'Deleting...';
            this.$store.dispatch('DESTROY_REQUEST', this.jobRequest.id).then(function () {
                _this3.deleteButtonStatus = 'Deleted';
            }).catch(function (error) {
                _this3.deleteButtonStatus = 'Failed';
                if (_typeof(error.body) === 'object') {
                    for (var key in error.body) {
                        _this3.submitErrors.push(error.body[key]);
                    }
                } else {
                    _this3.submitErrors.push(error.status + ": Server Error. Please try again later.");
                }
            });
        },


        pushError: function pushError(error) {
            if (this.submitErrors.indexOf(error) === -1) {
                this.submitErrors.push(error);
            }
        }
    }
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConversationCard_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConversationCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ConversationCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingSpinner_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LoadingSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__LoadingSpinner_vue__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        conversation: __WEBPACK_IMPORTED_MODULE_0__ConversationCard_vue___default.a,
        loading: __WEBPACK_IMPORTED_MODULE_1__LoadingSpinner_vue___default.a
    },
    computed: {
        /**
         * List of all conversations by this user.
         * @returns {Array}
         */
        conversations: function conversations() {
            return this.$store.getters.conversations;
        },

        /**
         * Current loading status (loading is true if data is being loaded asynchronously)
         * @returns {Boolean}
         */
        loading: function loading() {
            return this.$store.state.loading;
        }
    }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        loading: __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default.a
    },
    computed: {
        /**
         * List of all conversations by this user.
         * @returns {Array}
         */
        offers: function offers() {
            return this.$store.getters.offers;
        },

        /**
         * Current loading status (loading is true if data is being loaded asynchronously)
         * @returns {Boolean}
         */
        loading: function loading() {
            return this.$store.state.loading;
        }
    },

    mounted: function mounted() {
        var _this = this;

        // Fetch current user from Vuex or API
        this.$store.dispatch('FETCH_USER').then(function (response) {
            _this.$store.dispatch('FETCH_OFFERS', response);
        });
    }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
    components: {
        loading: __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default.a
    },
    computed: {
        /**
         * List of all conversations by this user.
         * @returns {Array}
         */
        requests: function requests() {
            return this.$store.getters.requests;
        },

        /**
         * Current loading status (loading is true if data is being loaded asynchronously)
         * @returns {Boolean}
         */
        loading: function loading() {
            return this.$store.state.loading;
        }
    },

    mounted: function mounted() {
        var _this = this;

        // Fetch current user from Vuex or API
        this.$store.dispatch('FETCH_USER').then(function (response) {
            _this.$store.dispatch('FETCH_REQUESTS', response);
        });
    }
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    computed: {
        /**
         * Current loading status (loading is true if data is being loaded asynchronously)
         * @returns {Boolean}
         */
        loading: function loading() {
            return this.$store.state.loading;
        }
    }
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  props: ['message'],
  computed: {
    picture: function picture() {
      return this.message.sender.picture || '/images/default_avatar.jpg';
    },
    user: function user() {
      return this.$store.state.user;
    },
    isUnread: function isUnread() {
      return this.message.sender.id !== this.user.id && this.message.is_seen === 0;
    }
  }
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
    data: function data() {
        return {
            userObject: {
                name: '',
                email: '',
                country_id: '',
                major: '',
                languages: '',
                twitter: '',
                facebook: '',
                about: ''
            },
            country_id: '',
            submitErrors: [],
            password: '',
            confirmPassword: '',
            fullError: '',
            saveButtonDisabled: false,
            saveButtonStatus: 'Save'
        };
    },

    computed: {
        countries: function countries() {
            return this.$store.state.countries;
        },

        /**
         * Get the avatar URL. In case the user doesn't have an avatar, show default one.
         * @returns {String}
         */
        avatar: function avatar() {
            return this.userObject.avatar || '/images/default_avatar.jpg';
        },

        /**
         * Current loading status (loading is true if data is being loaded asynchronously)
         * @returns {Boolean}
         */
        loading: function loading() {
            return this.$store.state.loading;
        },

        /**
         * Only show errors when the attempt to save just failed.
         * @returns {Boolean}
         */
        showErrors: function showErrors() {
            return this.submitErrors.length > 0 && this.saveButtonStatus === 'Failed';
        },

        saveButtonClasses: function saveButtonClasses() {
            return {
                'is-info': this.saveButtonStatus === 'Save' || this.saveButtonStatus === 'Saving...',
                'is-loading': this.saveButtonStatus === 'Saving...',
                'is-success': this.saveButtonStatus === 'Saved',
                'is-error': this.saveButtonStatus === 'Failed'
            };
        }
    },
    components: {
        loading: __WEBPACK_IMPORTED_MODULE_0__LoadingSpinner_vue___default.a
    },
    mounted: function mounted() {
        var _this = this;

        // Fetch current user from Vuex or API
        this.$store.dispatch('FETCH_COUNTRIES');
        this.$store.dispatch('FETCH_USER').then(function (response) {
            // this.userObject = response would create a copy by reference! All changes to userObject
            // would cascade down to the store object as well.
            // JSON.parse(JSON.stringify) in order to create a new copy of the user, not by reference.
            // Needs to be done so that the user changes can be disregarded once he clicks 'Cancel'
            _this.userObject = JSON.parse(JSON.stringify(response));
            _this.country_id = response.country.id || null;
        });
    },
    methods: {
        /**
         * Submit the form and update the user
         */
        submit: function submit() {
            var _this2 = this;

            // Reset errors
            this.submitErrors = [];
            this.saveButtonDisabled = true;
            this.saveButtonStatus = 'Saving...';
            var elAvatar = document.getElementById('avatar');
            var elResume = document.getElementById('resume');
            var elHeader = document.getElementById('header');
            var avFiles = elAvatar.files;
            var reFiles = elResume.files;
            var heFiles = elHeader.files;

            var formData = new FormData();

            if (this.userObject.major && this.userObject.major.length > 0) formData.append('major', this.userObject.major);
            if (this.userObject.languages && this.userObject.languages.length > 0) formData.append('languages', this.userObject.languages);
            if (this.userObject.twitter && this.userObject.twitter.length > 0) formData.append('twitter', this.userObject.twitter);
            if (this.userObject.facebook && this.userObject.facebook.length > 0) formData.append('facebook', this.userObject.facebook);
            if (this.userObject.about && this.userObject.about.length > 0) formData.append('about', this.userObject.about);

            if (this.userObject.country_id && this.userObject.country_id.length > 0) formData.append('country_id', this.userObject.country_id);

            // Check whether name field is empty
            if (this.userObject.name.length === 0) {
                this.saveButtonStatus = 'Failed';
                this.pushError("You must specify a name.");
                return;
            }
            formData.append('name', this.userObject.name);

            // Check whether email field is empty
            if (this.userObject.email.length === 0) {
                this.saveButtonStatus = 'Failed';
                this.pushError("You must specify an email address.");
                return;
            }

            formData.append('email', this.userObject.email);

            // Check whether a new password has been entered and if they match
            if (this.password.length > 0) {
                if (this.password !== this.confirmPassword) {
                    this.saveButtonStatus = 'Failed';
                    this.pushError("Your passwords didn't match.");
                    return;
                }
                formData.append('password', this.password);
            }

            // Check if avatar file has been selected
            if (avFiles.length) {
                if (!this.validateImage(avFiles[0])) {
                    this.saveButtonStatus = 'Failed';
                    return;
                }
                formData.append('picture', avFiles[0]);
            }

            if (reFiles.length) {
                formData.append('resume', reFiles[0]);
            }

            if (heFiles.length) {
                if (!this.validateImage(heFiles[0])) {
                    this.saveButtonStatus = 'Failed';
                    return;
                }
                formData.append('header', heFiles[0]);
            }

            // Laravel bug: multipart/form-data needs to be POST. Specify custom method PUT.
            formData.append('_method', 'PUT');
            this.$store.dispatch('PATCH_USER', {
                id: this.userObject.id,
                data: formData
            }).then(function (response) {
                _this2.userObject.picture = response.picture || '/images/default_avatar.jpg';
                _this2.$store.commit('SET_USER', _this2.userObject);
                _this2.saveButtonStatus = 'Saved';
                _this2.saveButtonDisabled = true;
            }).catch(function (error) {
                _this2.saveButtonStatus = 'Failed';
                if (_typeof(error.body) === 'object') {
                    for (var key in error.body) {
                        _this2.submitErrors.push(error.body[key]);
                    }
                } else {
                    _this2.submitErrors.push(error.status + ": Server Error. Please try again later.");
                }
            });
        },
        validateImage: function validateImage(file) {
            if (!/\.(png|jpeg|jpg)$/i.test(file.name)) {
                this.pushError("Must be a valid image file (.PNG, .JPG or .JPEG allowed).");
                return false;
            }
            if (!(file.size / 1024 < 2000)) {
                this.pushError("Image must be smaller than 2MB.");
                return false;
            }
            return true;
        },


        pushError: function pushError(error) {
            if (this.submitErrors.indexOf(error) === -1) {
                this.submitErrors.push(error);
            }
        }
    }
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Inbox_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Inbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Inbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Conversation_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Conversation_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Conversation_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Profile_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Profile_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Profile_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_JobRequests_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_JobRequests_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_JobRequests_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CreateJobRequest__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CreateJobRequest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_CreateJobRequest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_EditJobRequest__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_EditJobRequest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_EditJobRequest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Company__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Company___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Company__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_JobOffers_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_JobOffers_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_JobOffers_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CreateJobOffer_vue__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_CreateJobOffer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_CreateJobOffer_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_EditJobOffer_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_EditJobOffer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_EditJobOffer_vue__);


Vue.use(__WEBPACK_IMPORTED_MODULE_0_vue_router__["a" /* default */]);












/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_0_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{ path: '/dashboard', redirect: '/dashboard/inbox' }, { path: '/dashboard/inbox', component: __WEBPACK_IMPORTED_MODULE_1__components_Inbox_vue___default.a }, { path: '/dashboard/inbox/:id(\\d+)', component: __WEBPACK_IMPORTED_MODULE_2__components_Conversation_vue___default.a }, { path: '/dashboard/profile', component: __WEBPACK_IMPORTED_MODULE_3__components_Profile_vue___default.a }, { path: '/dashboard/jobrequests', component: __WEBPACK_IMPORTED_MODULE_4__components_JobRequests_vue___default.a }, { path: '/dashboard/jobrequests/create', component: __WEBPACK_IMPORTED_MODULE_5__components_CreateJobRequest___default.a }, { path: '/dashboard/jobrequests/:id(\\d+)', component: __WEBPACK_IMPORTED_MODULE_6__components_EditJobRequest___default.a }, { path: '/dashboard/company', component: __WEBPACK_IMPORTED_MODULE_7__components_Company___default.a }, { path: '/dashboard/joboffers', component: __WEBPACK_IMPORTED_MODULE_8__components_JobOffers_vue___default.a }, { path: '/dashboard/joboffers/create', component: __WEBPACK_IMPORTED_MODULE_9__components_CreateJobOffer_vue___default.a }, { path: '/dashboard/joboffers/:id(\\d+)', component: __WEBPACK_IMPORTED_MODULE_10__components_EditJobOffer_vue___default.a }, { path: '/dashboard/admin', component: __WEBPACK_IMPORTED_MODULE_1__components_Inbox_vue___default.a }, { path: '*', redirect: '/dashboard' }]
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    /**
     * Resource: User
     * GET, PUT, DELETE
     */

    getUser: function getUser() {
        return Vue.http.get('/api/user').then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    updateUser: function updateUser(id, data) {
        return Vue.http.post('/api/users/' + id, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    deleteUser: function deleteUser(id) {
        return Vue.http.delete('/api/users/' + id).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },


    /**
     * Resource: Countries
     * GET
     */

    getCountries: function getCountries() {
        return Vue.http.get('/api/countries').then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },


    /**
     * Resource: Conversations
     * GET, DELETE, POST
     */

    getUserConversations: function getUserConversations() {
        return Vue.http.get('/api/conversations').then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    getConversation: function getConversation(id) {
        return Vue.http.get('/api/conversations/' + id).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    deleteConversation: function deleteConversation(id) {
        return Vue.http.delete('/api/conversations/' + id).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    storeMessage: function storeMessage(message) {
        return Vue.http.post('/api/messages', message, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },


    /**
     * Resource: Job Requests
     * GET, PUT, POST, DELETE
     */

    getUserJobRequests: function getUserJobRequests(id) {
        return Vue.http.get('/api/users/' + id + '/job_requests').then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    getJobRequest: function getJobRequest(id) {
        return Vue.http.get('/api/job_requests/' + id).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    storeJobRequest: function storeJobRequest(data) {
        return Vue.http.post('/api/job_requests', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    updateJobRequest: function updateJobRequest(id, data) {
        return Vue.http.put('/api/job_requests/' + id, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    deleteJobRequest: function deleteJobRequest(id) {
        return Vue.http.delete('/api/job_requests/' + id).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },


    /**
     * Resource: Job Offers
     * GET, PUT, POST, DELETE
     */

    getUserJobOffers: function getUserJobOffers(id) {
        return Vue.http.get('/api/users/' + id + '/job_offers').then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    getJobOffer: function getJobOffer(id) {
        return Vue.http.get('/api/job_requests/' + id).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    storeJobOffer: function storeJobOffer(data) {
        return Vue.http.post('/api/job_offers', data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    updateJobOffer: function updateJobOffer(id, data) {
        return Vue.http.put('/api/job_offers/' + id, data, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    },
    deleteJobOffer: function deleteJobOffer(id) {
        return Vue.http.delete('/api/job_offers/' + id).then(function (response) {
            return Promise.resolve(response.body);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    }
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_api__ = __webpack_require__(19);



var store = new __WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* default */].Store({
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
        FETCH_USER: function FETCH_USER(_ref) {
            var commit = _ref.commit,
                state = _ref.state;

            var isEmpty = Object.keys(state.user).length === 0;
            if (isEmpty) commit('SET_LOADING', { val: true });
            return !isEmpty ? Promise.resolve(state.user) : __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].getUser().then(function (response) {
                commit('SET_LOADING', { val: false });
                commit('SET_USER', response);
                return Promise.resolve(response);
            }).catch(function (error) {
                commit('SET_LOADING', { val: false });
                commit('FAILURE', error);
            });
        },

        /**
         * Fetch all job requests of a user by the user's ID. Once done, store in Vuex
         */
        FETCH_REQUESTS: function FETCH_REQUESTS(_ref2, user) {
            var commit = _ref2.commit;

            commit('SET_LOADING', { val: true });
            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].getUserJobRequests(user.id).then(function (response) {
                commit('SET_LOADING', { val: false });
                commit('SET_REQUESTS', response);
            }).catch(function (error) {
                commit('SET_LOADING', { val: false });
                commit('FAILURE', error);
            });
        },

        /**
         * Fetch all job offers of a user by the user's ID. Once done, store in Vuex
         */
        FETCH_OFFERS: function FETCH_OFFERS(_ref3, user) {
            var commit = _ref3.commit;

            commit('SET_LOADING', { val: true });
            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].getUserJobOffers(user.id).then(function (response) {
                commit('SET_LOADING', { val: false });
                commit('SET_OFFERS', response);
            }).catch(function (error) {
                commit('SET_LOADING', { val: false });
                commit('FAILURE', error);
            });
        },

        /**
         * Fetch a single job request. First check if the job request is already stored in Vuex, 
         * if that is the case then simply return it. Otherwise make a call to the API.
         */
        FETCH_REQUEST: function FETCH_REQUEST(_ref4, id) {
            var commit = _ref4.commit,
                state = _ref4.state;

            var exists = id in state.jobRequests;
            if (!exists) commit('SET_LOADING', { val: true });
            return exists ? Promise.resolve(state.jobRequests[id]) : __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].getJobRequest(id).then(function (response) {
                commit('SET_LOADING', { val: false });
                return Promise.resolve(response);
            }).catch(function (error) {
                commit('SET_LOADING', { val: false });
                return Promise.reject(error);
            });
        },

        /**
         * Fetch a single job offer. First check if the job offer is already stored in Vuex, 
         * if that is the case then simply return it. Otherwise make a call to the API.
         */
        FETCH_OFFER: function FETCH_OFFER(_ref5, id) {
            var commit = _ref5.commit,
                state = _ref5.state;

            var exists = id in state.jobOffers;
            if (!exists) commit('SET_LOADING', { val: true });
            return exists ? Promise.resolve(state.jobOffers[id]) : __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].getJobOffer(id).then(function (response) {
                commit('SET_LOADING', { val: false });
                return Promise.resolve(response);
            }).catch(function (error) {
                commit('SET_LOADING', { val: false });
                return Promise.reject(error);
            });
        },

        /**
         * Fetch all countries from the API. Once done, store in Vuex
         */
        FETCH_COUNTRIES: function FETCH_COUNTRIES(_ref6) {
            var commit = _ref6.commit;

            commit('SET_LOADING', { val: true });
            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].getCountries().then(function (response) {
                commit('SET_LOADING', { val: false });
                commit('SET_COUNTRIES', response);
            }).catch(function (error) {
                commit('SET_LOADING', { val: false });
                commit('FAILURE', error);
            });
        },

        /**
         * Update a user
         */
        PATCH_USER: function PATCH_USER(_ref7, payload) {
            var commit = _ref7.commit;

            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].updateUser(payload.id, payload.data).then(function (response) {
                return Promise.resolve(response);
            }).catch(function (error) {
                return Promise.reject(error);
            });
        },

        /**
         * Fetch a list of all conversations, then store.
         */
        FETCH_CONVERSATIONS: function FETCH_CONVERSATIONS(_ref8) {
            var state = _ref8.state,
                commit = _ref8.commit;

            var isEmpty = Object.keys(state.conversations).length === 0;
            if (isEmpty) commit('SET_LOADING', { val: true });
            return !isEmpty ? Promise.resolve(state.conversations) : __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].getUserConversations().then(function (response) {
                commit('SET_LOADING', { val: false });
                commit('SET_CONVERSATIONS', response);
            }).catch(function (error) {
                commit('SET_LOADING', { val: false });
                commit('FAILURE', error);
            });
        },

        /**
         * Fetch a single conversation. First check if the conversation is already stored in Vuex, 
         * if that is the case then simply return it. Otherwise make a call to the API.
         */
        FETCH_CONVERSATION: function FETCH_CONVERSATION(_ref9, id) {
            var commit = _ref9.commit,
                state = _ref9.state;

            var exists = id in state.conversations && state.conversations[id].hasOwnProperty('messages');
            if (!exists) commit('SET_LOADING', { val: true });
            return exists ? Promise.resolve(state.conversations[id]) : __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].getConversation(id).then(function (response) {
                commit('SET_LOADING', { val: false });
                commit('SET_CONVERSATION', response);
                return Promise.resolve(response);
            }).catch(function (error) {
                commit('SET_LOADING', { val: false });
                return Promise.reject(error);
            });
        },

        /**
         * Delete an existing conversation from database and/or Vuex
         */
        DESTROY_CONVERSATION: function DESTROY_CONVERSATION(_ref10, conversation) {
            var commit = _ref10.commit;

            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].deleteConversation(conversation.id).then(function (response) {
                commit('DELETE_CONVERSATION', conversation);
            }).catch(function (error) {
                return Promise.reject(error);
            });
        },

        /** 
         * Store a new message in database and Vuex
         */
        STORE_MESSAGE: function STORE_MESSAGE(_ref11, message) {
            var commit = _ref11.commit;

            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].storeMessage(message).then(function (response) {
                commit('ADD_MESSAGE', response);
                return Promise.resolve(response);
            }).catch(function (error) {
                return Promise.reject(error);
            });
        },

        /**
         * Store a new job request in database and Vuex
         */
        STORE_REQUEST: function STORE_REQUEST(_ref12, request) {
            var commit = _ref12.commit;

            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].storeJobRequest(request).then(function (response) {
                commit('ADD_REQUEST', response);
                return Promise.resolve(response);
            }).catch(function (error) {
                return Promise.reject(error);
            });
        },

        /**
         * Store a new job offer in database and Vuex
         */
        STORE_OFFER: function STORE_OFFER(_ref13, offer) {
            var commit = _ref13.commit;

            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].storeJobOffer(offer).then(function (response) {
                return Promise.resolve(response);
            }).catch(function (error) {
                return Promise.reject(error);
            });
        },

        /**
         * Update an existing job request in database and Vuex
         */
        PATCH_REQUEST: function PATCH_REQUEST(_ref14, payload) {
            var commit = _ref14.commit;

            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].updateJobRequest(payload.id, payload.data).then(function (response) {
                return Promise.resolve(response);
            }).catch(function (error) {
                return Promise.reject(error);
            });
        },

        /**
         * Update an existing job offer in database and Vuex
         */
        PATCH_OFFER: function PATCH_OFFER(_ref15, payload) {
            var commit = _ref15.commit;

            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].updateJobOffer(payload.id, payload.data).then(function (response) {
                return Promise.resolve(response);
            }).catch(function (error) {
                return Promise.reject(error);
            });
        },

        /**
         * Delete an existing job request from database and/or Vuex
         */
        DESTROY_REQUEST: function DESTROY_REQUEST(_ref16, id) {
            var commit = _ref16.commit;

            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].deleteJobRequest(id).then(function (response) {
                commit('DELETE_REQUEST', id);
            }).catch(function (error) {
                return Promise.reject(error);
            });
        },

        /**
         * Delete an existing job offer from database and/or Vuex
         */
        DESTROY_OFFER: function DESTROY_OFFER(_ref17, id) {
            var commit = _ref17.commit;

            return __WEBPACK_IMPORTED_MODULE_1__services_api__["a" /* default */].deleteJobOffer(id).then(function (response) {
                commit('DELETE_OFFER', id);
            }).catch(function (error) {
                return Promise.reject(error);
            });
        }

    },

    mutations: {

        FAILURE: function FAILURE(state, error) {
            state.failure = error.body;
        },

        SET_USER: function SET_USER(state, user) {
            for (var key in user) {
                if (user[key] === 'null') user[key] = '';
            }
            state.user = user;
        },

        ADD_MESSAGE: function ADD_MESSAGE(state, message) {
            state.conversations[message.conversation_id].messages.unshift(message);
        },

        SET_REQUESTS: function SET_REQUESTS(state, requests) {
            requests.forEach(function (request) {
                Vue.set(state.jobRequests, request.id, request);
            });
        },

        ADD_REQUEST: function ADD_REQUEST(state, request) {
            Vue.set(state.jobRequests, request.id, request);
        },

        UPDATE_REQUEST: function UPDATE_REQUEST(state, request) {
            state.jobRequests[request.id] = request;
        },

        DELETE_REQUEST: function DELETE_REQUEST(state, id) {
            Vue.delete(state.jobRequests, id);
        },

        SET_OFFERS: function SET_OFFERS(state, offers) {
            offers.forEach(function (offer) {
                Vue.set(state.jobOffers, offer.id, offer);
            });
        },

        ADD_OFFER: function ADD_OFFER(state, offer) {
            Vue.set(state.jobOffers, offer.id, offer);
        },

        UPDATE_OFFER: function UPDATE_OFFER(state, offer) {
            state.jobOffers[offer.id] = offer;
        },

        DELETE_OFFER: function DELETE_OFFER(state, id) {
            Vue.delete(state.jobOffers, id);
        },

        SET_COUNTRIES: function SET_COUNTRIES(state, countries) {
            state.countries = countries;
        },

        SET_CONVERSATIONS: function SET_CONVERSATIONS(state, conversations) {
            conversations.forEach(function (conversation) {
                Vue.set(state.conversations, conversation.id, conversation);
            });
        },

        SET_CONVERSATION: function SET_CONVERSATION(state, conversation) {
            Vue.set(state.conversations, conversation.id, conversation);
        },

        DELETE_CONVERSATION: function DELETE_CONVERSATION(state, id) {
            Vue.delete(state.conversations, id);
        },

        SET_LOADING: function SET_LOADING(state, _ref18) {
            var val = _ref18.val;

            state.loading = val;
        }
    },

    getters: {
        /**
         * Map Job Requests object to an array
         */
        requests: function requests(state) {
            return Object.keys(state.jobRequests).map(function (key) {
                return state.jobRequests[key];
            });
        },
        /**
         * Map Job Offers object to an array
         */
        offers: function offers(state) {
            return Object.keys(state.jobOffers).map(function (key) {
                return state.jobOffers[key];
            });
        },
        /**
         * Map Job Requests object to an array
         */
        conversations: function conversations(state) {
            return Object.keys(state.conversations).map(function (key) {
                return state.conversations[key];
            });
        }
    }
});

/* harmony default export */ __webpack_exports__["a"] = store;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/Company.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Company.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-533e7c39", Component.options)
  } else {
    hotAPI.reload("data-v-533e7c39", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/Conversation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Conversation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f4e3af12", Component.options)
  } else {
    hotAPI.reload("data-v-f4e3af12", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/ConversationCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ConversationCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7246f827", Component.options)
  } else {
    hotAPI.reload("data-v-7246f827", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/CreateJobOffer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CreateJobOffer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-499d62a2", Component.options)
  } else {
    hotAPI.reload("data-v-499d62a2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/CreateJobRequest.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] CreateJobRequest.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4151d2a2", Component.options)
  } else {
    hotAPI.reload("data-v-4151d2a2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/EditJobOffer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] EditJobOffer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d8198486", Component.options)
  } else {
    hotAPI.reload("data-v-d8198486", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/EditJobRequest.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] EditJobRequest.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d5793a0", Component.options)
  } else {
    hotAPI.reload("data-v-5d5793a0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/Inbox.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Inbox.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b132627c", Component.options)
  } else {
    hotAPI.reload("data-v-b132627c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/JobOffers.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] JobOffers.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17e9aaf0", Component.options)
  } else {
    hotAPI.reload("data-v-17e9aaf0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/JobRequests.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] JobRequests.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a836e5d", Component.options)
  } else {
    hotAPI.reload("data-v-3a836e5d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/MessageCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MessageCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c20f971a", Component.options)
  } else {
    hotAPI.reload("data-v-c20f971a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/allaire/Documents/dev/erasmus/resources/assets/js/components/Profile.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Profile.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c235365", Component.options)
  } else {
    hotAPI.reload("data-v-7c235365", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "dashboard__requests"
  }, [_c('loading'), _vm._v(" "), (!_vm.loading) ? _c('div', [_c('h3', {
    staticClass: "dashboard__title"
  }, [_vm._v("Job Offers")]), _vm._v(" "), _c('router-link', {
    staticClass: "button create is-info",
    attrs: {
      "to": "/dashboard/jobrequests/create"
    }
  }, [_vm._v("New Job Offer")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.offers.length) + " job offers in total.")]), _vm._v(" "), _vm._l((_vm.offers), function(offer) {
    return _c('div', {
      staticClass: "dashboard__request"
    }, [_c('h4', [_vm._v(_vm._s(offer.title))]), _vm._v(" "), _c('div', {
      staticClass: "request__body"
    }, [_vm._v("\n          " + _vm._s(offer.body) + "\n        ")]), _vm._v(" "), _c('router-link', {
      staticClass: "button is-outline",
      attrs: {
        "to": '/dashboard/jobrequests/' + offer.id
      }
    }, [_vm._v("Edit")])], 1)
  })], 2) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-17e9aaf0", module.exports)
  }
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "spinner"
  }, [_c('div', {
    staticClass: "double-bounce1"
  }), _vm._v(" "), _c('div', {
    staticClass: "double-bounce2"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-21fc359e", module.exports)
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "dashboard__requests"
  }, [_c('loading'), _vm._v(" "), (!_vm.loading) ? _c('div', [_c('h3', {
    staticClass: "dashboard__title"
  }, [_vm._v("Job Requests")]), _vm._v(" "), _c('router-link', {
    staticClass: "button create is-info",
    attrs: {
      "to": "/dashboard/jobrequests/create"
    }
  }, [_vm._v("New Job Request")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.requests.length) + " job requests in total.")]), _vm._v(" "), _vm._l((_vm.requests), function(request) {
    return _c('div', {
      staticClass: "dashboard__request"
    }, [_c('h4', [_vm._v(_vm._s(request.title))]), _vm._v(" "), _c('div', {
      staticClass: "request__body"
    }, [_vm._v("\n          " + _vm._s(request.body) + "\n        ")]), _vm._v(" "), _c('router-link', {
      staticClass: "button is-outline",
      attrs: {
        "to": '/dashboard/jobrequests/' + request.id
      }
    }, [_vm._v("Edit")])], 1)
  })], 2) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3a836e5d", module.exports)
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "dashboard__requests"
  }, [_c('loading'), _vm._v(" "), (!_vm.loading) ? _c('div', [_c('h3', {
    staticClass: "dashboard__title"
  }, [_vm._v("Create Job Request")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    attrs: {
      "for": "title"
    }
  }, [_vm._v("Titel")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.jobRequest.title),
      expression: "jobRequest.title"
    }],
    attrs: {
      "type": "text",
      "id": "title"
    },
    domProps: {
      "value": (_vm.jobRequest.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.jobRequest.title = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    attrs: {
      "for": "body"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.jobRequest.body),
      expression: "jobRequest.body"
    }],
    attrs: {
      "id": "body"
    },
    domProps: {
      "value": (_vm.jobRequest.body)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.jobRequest.body = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    staticClass: "button is-info",
    class: _vm.saveButtonClasses,
    attrs: {
      "disabled": _vm.saveButtonDisabled
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.saveButtonStatus))]), _vm._v(" "), _c('router-link', {
    staticClass: "button is-outline",
    attrs: {
      "to": "/dashboard/jobrequests"
    }
  }, [_vm._v("Back")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.showErrors) ? _c('div', _vm._l((_vm.submitErrors), function(error) {
    return _c('p', {
      staticClass: "error is-danger"
    }, [_vm._v("\n        " + _vm._s(error) + "\n      ")])
  })) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4151d2a2", module.exports)
  }
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "dashboard__requests"
  }, [_c('loading'), _vm._v(" "), (!_vm.loading) ? _c('div', [_c('h3', {
    staticClass: "dashboard__title"
  }, [_vm._v("Create Job Offer")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    attrs: {
      "for": "title"
    }
  }, [_vm._v("Titel")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.jobOffer.title),
      expression: "jobOffer.title"
    }],
    attrs: {
      "type": "text",
      "id": "title"
    },
    domProps: {
      "value": (_vm.jobOffer.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.jobOffer.title = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    attrs: {
      "for": "body"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.jobOfffer.body),
      expression: "jobOfffer.body"
    }],
    attrs: {
      "id": "body"
    },
    domProps: {
      "value": (_vm.jobOfffer.body)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.jobOfffer.body = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    staticClass: "button is-info",
    class: _vm.saveButtonClasses,
    attrs: {
      "disabled": _vm.saveButtonDisabled
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.saveButtonStatus))]), _vm._v(" "), _c('router-link', {
    staticClass: "button is-outline",
    attrs: {
      "to": "/dashboard/joboffers"
    }
  }, [_vm._v("Back")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.showErrors) ? _c('div', _vm._l((_vm.submitErrors), function(error) {
    return _c('p', {
      staticClass: "error is-danger"
    }, [_vm._v("\n        " + _vm._s(error) + "\n      ")])
  })) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-499d62a2", module.exports)
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "dashboard__form form--profile"
  }, [_c('loading'), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }]
  }, [_c('h3', {
    staticClass: "dashboard__title"
  }, [_vm._v("Edit Company")]), _vm._v(" "), _c('h5', {
    staticClass: "form__title"
  }, [_vm._v("Account Information")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.email),
      expression: "userObject.email"
    }],
    attrs: {
      "id": "email",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.email = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("New Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "id": "password",
      "type": "password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "confirm"
    }
  }, [_vm._v("Repeat Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.confirmPassword),
      expression: "confirmPassword"
    }],
    attrs: {
      "id": "confirm",
      "type": "password"
    },
    domProps: {
      "value": (_vm.confirmPassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.confirmPassword = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h5', {
    staticClass: "form__title"
  }, [_vm._v("General Information")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.name),
      expression: "userObject.name"
    }],
    attrs: {
      "id": "name",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "location"
    }
  }, [_vm._v("Location")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.location),
      expression: "userObject.location"
    }],
    attrs: {
      "id": "location",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.location)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.location = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.country_id),
      expression: "userObject.country_id"
    }],
    attrs: {
      "id": "country",
      "options": "countries"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.userObject.country_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  })])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h5', {
    staticClass: "form__title"
  }, [_vm._v("Social Information")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "twitter"
    }
  }, [_vm._v("Twitter")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.twitter),
      expression: "userObject.twitter"
    }],
    attrs: {
      "id": "twitter",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.twitter)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.twitter = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "facebook"
    }
  }, [_vm._v("Facebook")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.facebook),
      expression: "userObject.facebook"
    }],
    attrs: {
      "id": "facebook",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.facebook)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.facebook = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h5', {
    staticClass: "form__title"
  }, [_vm._v("About")]), _vm._v(" "), _c('p', [_vm._v("Write something about your company.")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.about),
      expression: "userObject.about"
    }],
    domProps: {
      "value": (_vm.userObject.about)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.about = $event.target.value
      }
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h5', {
    staticClass: "form__title"
  }, [_vm._v("Files")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    staticClass: "button is-info",
    class: _vm.saveButtonClasses,
    attrs: {
      "disabled": _vm.saveButtonDisabled
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.saveButtonStatus))]), _vm._v(" "), _c('router-link', {
    staticClass: "button is-outline",
    attrs: {
      "to": "/dashboard"
    }
  }, [_vm._v("Back")])], 1)]), _vm._v(" "), _c('div', [_vm._v(_vm._s(_vm.fullError))]), _vm._v(" "), (_vm.showErrors) ? _c('div', _vm._l((_vm.submitErrors), function(error) {
    return _c('p', {
      staticClass: "error is-danger"
    }, [_vm._v("\n        " + _vm._s(error) + "\n      ")])
  })) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-4"
  }, [_c('div', {
    staticClass: "file-field"
  }, [_c('label', {
    staticClass: "button is-outline",
    attrs: {
      "for": "avatar"
    }
  }, [_c('span', [_vm._v("Upload Logo")]), _vm._v(" "), _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "mdi mdi-cloud-upload"
  })])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "id": "avatar"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "file-path"
  }, [_vm._v("Please select a file")])])]), _vm._v(" "), _c('div', {
    staticClass: "column is-4"
  }, [_c('div', {
    staticClass: "file-field"
  }, [_c('label', {
    staticClass: "button is-outline",
    attrs: {
      "for": "header"
    }
  }, [_c('span', [_vm._v("Upload Profile Header")]), _vm._v(" "), _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "mdi mdi-cloud-upload"
  })])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "id": "header"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "file-path"
  }, [_vm._v("Please select a file")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-533e7c39", module.exports)
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "dashboard__requests"
  }, [_c('loading'), _vm._v(" "), (!_vm.loading) ? _c('div', [_c('h3', {
    staticClass: "dashboard__title"
  }, [_vm._v("Edit Job Request")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    attrs: {
      "for": "title"
    }
  }, [_vm._v("Titel")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.jobRequest.title),
      expression: "jobRequest.title"
    }],
    attrs: {
      "type": "text",
      "id": "title"
    },
    domProps: {
      "value": (_vm.jobRequest.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.jobRequest.title = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    attrs: {
      "for": "body"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.jobRequest.body),
      expression: "jobRequest.body"
    }],
    attrs: {
      "id": "body"
    },
    domProps: {
      "value": (_vm.jobRequest.body)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.jobRequest.body = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    staticClass: "button is-info",
    class: _vm.saveButtonClasses,
    attrs: {
      "disabled": _vm.saveButtonDisabled
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.saveButtonStatus))]), _vm._v(" "), _c('router-link', {
    staticClass: "button is-outline",
    attrs: {
      "to": "/dashboard/jobrequests"
    }
  }, [_vm._v("Back")]), _vm._v(" "), _c('button', {
    staticClass: "destroy button is-danger",
    on: {
      "click": _vm.destroy
    }
  }, [_vm._v(_vm._s(_vm.deleteButtonStatus))])], 1)]) : _vm._e(), _vm._v(" "), (_vm.showErrors) ? _c('div', _vm._l((_vm.submitErrors), function(error) {
    return _c('p', {
      staticClass: "error is-danger"
    }, [_vm._v("\n        " + _vm._s(error) + "\n      ")])
  })) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d5793a0", module.exports)
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-link', {
    attrs: {
      "to": '/dashboard/inbox/' + _vm.conversation.id
    }
  }, [_c('div', {
    class: [{
      unread: _vm.isUnread
    }, 'conversation__card']
  }, [_c('img', {
    attrs: {
      "src": _vm.picture
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "conversation__info"
  }, [_c('h4', [_vm._v(_vm._s(_vm.partner.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.conversation.latest_message.message) + " by "), _c('em', [_vm._v(_vm._s(_vm.sender))])])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7246f827", module.exports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "dashboard__form form--profile"
  }, [_c('loading'), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loading),
      expression: "!loading"
    }]
  }, [_c('h3', {
    staticClass: "dashboard__title"
  }, [_vm._v("Edit Profile")]), _vm._v(" "), _c('h5', {
    staticClass: "form__title"
  }, [_vm._v("Account Information")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.name),
      expression: "userObject.name"
    }],
    attrs: {
      "id": "name",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.email),
      expression: "userObject.email"
    }],
    attrs: {
      "id": "email",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.email = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("New Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "id": "password",
      "type": "password"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "confirm"
    }
  }, [_vm._v("Repeat Password")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.confirmPassword),
      expression: "confirmPassword"
    }],
    attrs: {
      "id": "confirm",
      "type": "password"
    },
    domProps: {
      "value": (_vm.confirmPassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.confirmPassword = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h5', {
    staticClass: "form__title"
  }, [_vm._v("Personal Information")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "languages"
    }
  }, [_vm._v("Languages")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.languages),
      expression: "userObject.languages"
    }],
    attrs: {
      "id": "languages",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.languages)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.languages = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "major"
    }
  }, [_vm._v("Major")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.major),
      expression: "userObject.major"
    }],
    attrs: {
      "id": "major",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.major)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.major = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.country_id),
      expression: "country_id"
    }],
    attrs: {
      "id": "country"
    },
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.country_id = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, _vm._l((_vm.countries), function(country) {
    return _c('option', {
      domProps: {
        "value": country.id
      }
    }, [_vm._v(_vm._s(country.name))])
  }))])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h5', {
    staticClass: "form__title"
  }, [_vm._v("Social Information")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "twitter"
    }
  }, [_vm._v("Twitter")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.twitter),
      expression: "userObject.twitter"
    }],
    attrs: {
      "id": "twitter",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.twitter)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.twitter = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "column is-6"
  }, [_c('label', {
    attrs: {
      "for": "facebook"
    }
  }, [_vm._v("Facebook")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.facebook),
      expression: "userObject.facebook"
    }],
    attrs: {
      "id": "facebook",
      "type": "text"
    },
    domProps: {
      "value": (_vm.userObject.facebook)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.facebook = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h5', {
    staticClass: "form__title"
  }, [_vm._v("About")]), _vm._v(" "), _c('p', [_vm._v("Write something about yourself.")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userObject.about),
      expression: "userObject.about"
    }],
    domProps: {
      "value": (_vm.userObject.about)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userObject.about = $event.target.value
      }
    }
  }), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h5', {
    staticClass: "form__title"
  }, [_vm._v("Files")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    staticClass: "button is-info",
    class: _vm.saveButtonClasses,
    attrs: {
      "disabled": _vm.saveButtonDisabled
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.saveButtonStatus))]), _vm._v(" "), _c('router-link', {
    staticClass: "button is-outline",
    attrs: {
      "to": "/dashboard"
    }
  }, [_vm._v("Back")])], 1)]), _vm._v(" "), (_vm.showErrors) ? _c('div', _vm._l((_vm.submitErrors), function(error) {
    return _c('p', {
      staticClass: "error is-danger"
    }, [_vm._v("\n        " + _vm._s(error) + "\n      ")])
  })) : _vm._e()], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "column is-4"
  }, [_c('div', {
    staticClass: "file-field"
  }, [_c('label', {
    staticClass: "button is-outline",
    attrs: {
      "for": "avatar"
    }
  }, [_c('span', [_vm._v("Upload Profile Picture")]), _vm._v(" "), _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "mdi mdi-cloud-upload"
  })])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "id": "avatar"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "file-path"
  }, [_vm._v("Please select a file")])])]), _vm._v(" "), _c('div', {
    staticClass: "column is-4"
  }, [_c('div', {
    staticClass: "file-field"
  }, [_c('label', {
    staticClass: "button is-outline",
    attrs: {
      "for": "resume"
    }
  }, [_c('span', [_vm._v("Upload Resume (PDF)")]), _vm._v(" "), _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "mdi mdi-cloud-upload"
  })])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "id": "resume"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "file-path"
  }, [_vm._v("Please select a file")])])]), _vm._v(" "), _c('div', {
    staticClass: "column is-4"
  }, [_c('div', {
    staticClass: "file-field"
  }, [_c('label', {
    staticClass: "button is-outline",
    attrs: {
      "for": "header"
    }
  }, [_c('span', [_vm._v("Upload Profile Header")]), _vm._v(" "), _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "mdi mdi-cloud-upload"
  })])]), _vm._v(" "), _c('input', {
    attrs: {
      "type": "file",
      "id": "header"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "file-path"
  }, [_vm._v("Please select a file")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c235365", module.exports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "dashboard__inbox"
  }, [_c('loading'), _vm._v(" "), (!_vm.loading) ? _c('h3', {
    staticClass: "dashboard__title"
  }, [_vm._v("Inbox")]) : _vm._e(), _vm._v(" "), (!_vm.loading) ? _c('p', [_vm._v(_vm._s(_vm.conversations.length) + " conversations in total.")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _vm._l((_vm.conversations), function(conversation) {
    return _c('conversation', {
      attrs: {
        "conversation": conversation
      }
    })
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b132627c", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: [{
      unread: _vm.isUnread
    }, 'message__card']
  }, [_c('img', {
    attrs: {
      "src": _vm.picture
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "message__info"
  }, [_c('h4', [_vm._v(_vm._s(_vm.message.sender.name))]), _c('span', {
    staticClass: "message__date"
  }, [_vm._v(_vm._s(_vm.message.readableCreatedAt) + " ago")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.message.message))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c20f971a", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "dashboard__requests"
  }, [_c('loading'), _vm._v(" "), (!_vm.loading) ? _c('div', [_c('h3', {
    staticClass: "dashboard__title"
  }, [_vm._v("Edit Job Offer")]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    attrs: {
      "for": "title"
    }
  }, [_vm._v("Titel")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.jobOffer.title),
      expression: "jobOffer.title"
    }],
    attrs: {
      "type": "text",
      "id": "title"
    },
    domProps: {
      "value": (_vm.jobOffer.title)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.jobOffer.title = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('label', {
    attrs: {
      "for": "body"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.jobOffer.body),
      expression: "jobOffer.body"
    }],
    attrs: {
      "id": "body"
    },
    domProps: {
      "value": (_vm.jobOffer.body)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.jobOffer.body = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "button-group"
  }, [_c('button', {
    staticClass: "button is-info",
    class: _vm.saveButtonClasses,
    attrs: {
      "disabled": _vm.saveButtonDisabled
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v(_vm._s(_vm.saveButtonStatus))]), _vm._v(" "), _c('router-link', {
    staticClass: "button is-outline",
    attrs: {
      "to": "/dashboard/joboffers"
    }
  }, [_vm._v("Back")]), _vm._v(" "), _c('button', {
    staticClass: "destroy button is-danger",
    on: {
      "click": _vm.destroy
    }
  }, [_vm._v(_vm._s(_vm.deleteButtonStatus))])], 1)]) : _vm._e(), _vm._v(" "), (_vm.showErrors) ? _c('div', _vm._l((_vm.submitErrors), function(error) {
    return _c('p', {
      staticClass: "error is-danger"
    }, [_vm._v("\n        " + _vm._s(error) + "\n      ")])
  })) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d8198486", module.exports)
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "dashboard__inbox"
  }, [_c('loading'), _vm._v(" "), (!_vm.loading) ? _c('h3', {
    staticClass: "dashboard__title"
  }, [_vm._v(_vm._s(_vm.partner.name))]) : _vm._e(), _vm._v(" "), (!_vm.loading) ? _c('p', [_vm._v(_vm._s(_vm.conversation.messages.length) + " messages.")]) : _vm._e(), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.newMessage.message),
      expression: "newMessage.message"
    }],
    attrs: {
      "id": "message",
      "name": "message",
      "placeholder": "New Message..."
    },
    domProps: {
      "value": (_vm.newMessage.message)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.newMessage.message = $event.target.value
      }, function($event) {
        _vm.resizeTextarea()
      }]
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "button is-outline is-animated",
    on: {
      "click": _vm.submitMessage
    }
  }, [_c('span', [_vm._v("Submit")]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _vm._l((_vm.conversation.messages), function(message) {
    return _c('message', {
      attrs: {
        "message": message
      }
    })
  }), _vm._v(" "), _c('router-link', {
    staticClass: "button is-outline",
    attrs: {
      "to": "/dashboard/inbox"
    }
  }, [_vm._v("Back")])], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "mdi mdi-chevron-right"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f4e3af12", module.exports)
  }
}

/***/ }),
/* 46 */,
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v2.2.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // inject instance registration hooks
    var hooks = data.hook || (data.hook = {});
    hooks.init = function (vnode) {
      matched.instances[name] = vnode.child;
    };
    hooks.prepatch = function (oldVnode, vnode) {
      matched.instances[name] = vnode.child;
    };
    hooks.destroy = function (vnode) {
      if (matched.instances[name] === vnode.child) {
        matched.instances[name] = undefined;
      }
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more comformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  if (query) {
    var parsedQuery;
    try {
      parsedQuery = parseQuery(query);
    } catch (e) {
      process.env.NODE_ENV !== 'production' && warn(false, e.message);
      parsedQuery = {};
    }
    for (var key in extraQuery) {
      parsedQuery[key] = extraQuery[key];
    }
    return parsedQuery
  } else {
    return extraQuery
  }
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom
) {
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (ref) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  return (path || '/') + stringifyQuery(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;
    var classes = {};
    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
    var compareTarget = location.path ? createRoute(null, location) : route;
    classes[activeClass] = this.exact
      ? isSameRoute(current, compareTarget)
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.target && e.target.getAttribute) {
    var target = e.target.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (this.$options.router) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  if (relative.charAt(0) === '/') {
    return relative
  }

  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '.') {
      continue
    } else if (segment === '..') {
      stack.pop();
    } else {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

/*  */

function createRouteMap (
  routes,
  oldPathMap,
  oldNameMap
) {
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathMap, nameMap, route);
  });

  return {
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var record = {
    path: normalizePath(path, parent),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = index$1;

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCache = Object.create(null);

function getRouteRegex (path) {
  var hit = regexpCache[path];
  var keys, regexp;

  if (hit) {
    keys = hit.keys;
    regexp = hit.regexp;
  } else {
    keys = [];
    regexp = index(path, keys);
    regexpCache[path] = { keys: keys, regexp: regexp };
  }

  return { keys: keys, regexp: regexp }
}

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : (current && current.path) || '/';
  var query = resolveQuery(parsedPath.query, next.query);
  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */

function createMatcher (routes) {
  var ref = createRouteMap(routes);
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = getRouteRegex(record.path).keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var path in pathMap) {
        if (matchRoute(path, location.params, location.path)) {
          return _createRoute(pathMap[path], location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      process.env.NODE_ENV !== 'production' && warn(
        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
      );
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  path,
  params,
  pathname
) {
  var ref = getRouteRegex(path);
  var regexp = ref.regexp;
  var keys = ref.keys;
  var m = pathname.match(regexp);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) { params[key.name] = val; }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */


var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
  }
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, onAbort);
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function () { onAbort && onAbort(); };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    hook(route, current, function (to) {
      if (to === false) {
        // next(false) -> abort navigation, ensure current URL
        this$1.ensureURL(true);
        abort();
      } else if (typeof to === 'string' || typeof to === 'object') {
        // next('/') or next({ path: '/' }) -> redirect
        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
        abort();
      } else {
        // confirm transition and pass on the value
        next(to);
      }
    });
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    // wait until async components are resolved before
    // extracting in-component enter guards
    runQueue(enterGuards, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { return cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  return function boundRouteGuard () {
    return guard.apply(instance, arguments)
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return flatMapComponents(matched, function (def, _, match, key) {
    // if it's a function and doesn't have Vue options attached,
    // assume it's an async component resolve function.
    // we are not using Vue's default async resolving mechanism because
    // we want to halt the navigation until the incoming component has been
    // resolved.
    if (typeof def === 'function' && !def.options) {
      return function (to, from, next) {
        var resolve = once(function (resolvedDef) {
          match.components[key] = resolvedDef;
          next();
        });

        var reject = once(function (reason) {
          warn(false, ("Failed to resolve async component " + key + ": " + reason));
          next(false);
        });

        var res = def(resolve, reject);
        if (res && typeof res.then === 'function') {
          res.then(resolve, reject);
        }
      }
    }
  })
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, this$1.current, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, this$1.current, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || []);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  this.beforeHooks.push(fn);
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  this.afterHooks.push(fn);
};

VueRouter.prototype.onReady = function onReady (cb) {
  this.history.onReady(cb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(to, current || this.history.current, append);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.2.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = VueRouter;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* unused harmony export mapGetters */
/* unused harmony export mapActions */
/**
 * vuex v2.2.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
};

var prototypeAccessors$1 = { state: {},namespaced: {} };

prototypeAccessors$1.state.get = function () {
  return this._rawModule.state || {}
};

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  var this$1 = this;

  // register root module (Vuex.Store options)
  this.root = new Module(rawRootModule, false);

  // register all nested modules
  if (rawRootModule.modules) {
    forEachValue(rawRootModule.modules, function (rawModule, key) {
      this$1.register([key], rawModule, false);
    });
  }
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update(this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  var parent = this.get(path.slice(0, -1));
  var newModule = new Module(rawModule, runtime);
  parent.addChild(path[path.length - 1], newModule);

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (targetModule, newModule) {
  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed'
        );
        return
      }
      update(targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

  var state = options.state; if ( state === void 0 ) state = {};
  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); });
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  assert(false, "Use store.replaceState() to explicit replace store state.");
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    console.error(("[vuex] unknown mutation type: " + type));
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (options && options.silent) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var entry = this._actions[type];
  if (!entry) {
    console.error(("[vuex] unknown action type: " + type));
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers;
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  assert(typeof getter === 'function', "store.watch only accepts a function.");
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule) {
  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path));
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (namespace) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var namespacedType = namespace + key;
    registerAction(store, namespacedType, action, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler(local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler({
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    console.error(("[vuex] duplicate getter key: " + type));
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue) {
    console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
    );
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
        return
      }
      return this.$store.commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (!(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
        return
      }
      return this.$store.dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (!module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.2.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions
};

/* harmony default export */ __webpack_exports__["a"] = index_esm;


/***/ }),
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);