import Vue from 'vue';
import App from './App.vue';
import Add from './components/Add'
import Users from './components/Users'
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Users},
    {path: '/add', component: Add}
  ],
})


new Vue({
  router,
  template: `
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">CRUD application</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/">Home<span class="sr-only">(current)</span></router-link>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><router-link to="/add">Add User</router-link></li>
    </ul>
  </div>
</nav>
  <router-view></router-view>
  </div>
  `
}).$mount(`#app`)
