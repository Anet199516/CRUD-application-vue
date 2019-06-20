<template>
  <div class="users container">
  <Alert v-if="alert" message="A new user has been added" />
      <h1 class="page-header">Manage Users</h1>
      <br />
      <table class="table table-striped">
          <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Country</th>
                  <th></th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="user in users">
                  <td>{{user.first_name}}</td>
                  <td>{{user.last_name}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.phone}}</td>
                  <td>{{user.country}}</td>
                  <td><router-link class="btn btn-dark" v-bind:to="'/user' + user.id">View</router-link></td>
                  <td><button class="btn btn-danger" v-on:click="deleteUser(user.id)">Delete</button></td>
              </tr>
          </tbody>
        </table> 
  </div>
</template>

<script>
import Alert from './Alert';

let initialUsers = [
    {
        id: Math.random().toFixed(2),
        first_name: 'Sam', 
        last_name: 'Smith', 
        phone: "345-777-888", 
        email: 'smith@gmail.com',
        country: 'USA'
    },
    {
        id: Math.random().toFixed(2), 
        first_name: "Pol", 
        last_name: "Berby", 
        phone: "999-485-935", 
        email: "polby@gmail.com", 
        country: "Great Britain"
    },
    {
        id: Math.random().toFixed(2), 
        first_name: "Adam", 
        last_name: "Bren", 
        phone: "098-124-950", 
        email: "adambren@gmail.com", 
        country: "Norway"
    },
    {
        id: Math.random().toFixed(2), 
        first_name: "Bill", 
        last_name: "Grand", 
        phone: "087-111-793", 
        email: "billgrand@gmail.com", 
        country: "Brasil"
    }
];

export default {
  name: 'users',
  data () {
    return {
        users: [],
        alert: '',
    }
  },

  methods: {
    getUsers() {
        if(!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify(initialUsers));
            
        } else {
            let result = localStorage.getItem('users');
            initialUsers = JSON.parse(result);
            this.users = initialUsers;
        }
        
        
    }
 },

    created: function() {
           if(this.$route.query.alert) {
               this.alert = this.$route.query.alert;
           }
        this.getUsers();
    },

    components: {
        Alert
    }
};

</script>

<style>

.page-header {
    margin-top: 20px;
}

.table {
    margin-top: 40px;
}

</style>