import Vue from 'vue';
import Main from './pages/Main.vue';
import './styles/main.css';

new Vue({
  el: '#app',
  render: (h) => h(Main),
});
