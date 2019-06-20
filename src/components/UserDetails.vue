<template>
  <div class="details container">
      <router-link class="btn btn-primary" to="/">Back</router-link>
      <h1 class="page-header">{{user.first_name}} {{user.last_name}}</h1>
      
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span>Phone: {{user.phone}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>Email: {{user.email}}</li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item">Country: {{user.country}}</li>
        </ul>
  </div>
</template>

<script>

export default {
  name: 'userdetails',
  data () {
    return {
        user: {}
    }
  },

  methods: {
      saveUsers(id) {
          let result = localStorage.getItem('users');
          const users = JSON.parse(result);
          const user = users.filter(user => user.id === id)[0];
          this.user = user;
      }
  },
      created: function() {
      this.saveUsers(this.$route.params.id);
      
  }
}
</script>

<style>

.btn {
  margin-top: 20px;
  margin-bottom: 20px;
}

.list-group {
  margin-top: 20px;
}

</style>
