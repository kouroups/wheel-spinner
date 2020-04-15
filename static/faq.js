/*
Copyright 2020 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import Vue from 'vue';
import Buefy from 'buefy';
Vue.use(Buefy);

import 'buefy/dist/buefy.css';

import './images/favicon.png';
import './images/icon_192.png';

import simpletoolbar from './simpletoolbar.vue';

var app = new Vue({
  el: '#app',
  components: { simpletoolbar }
})