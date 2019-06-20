<template>
  <div class="details container">
      <router-link to="/">Back</router-link>
      <h1 class="page-header">{{user.first_name}} {{user.last_name}}
      <span class="pull-right">
            <router-link class="btn btn-primary" v-bind:to="'/edit/'+ user.id">Edit</router-link>
            <button class="btn btn-danger" v-on:click="deleteCustomer(user.id)">Delete</button>
            </span>
      </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> {{user.phone}}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{user.email}}</li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item"> {{user.country}}</li>
        </ul>
  </div>
</template>

<script>

let initialUsers = [

    {
        id: Math.random(),
        first_name: 'Sam', 
        last_name: 'Smith', 
        phone: "345-777-888", 
        email: 'smith@gmail.com',
        country: 'USA'
    },

    {
        id: Math.random(), 
        first_name: "Pol", 
        last_name: "Berby", 
        phone: "999-485-935", 
        email: "polby@gmail.com", 
        country: "Great Britain"
    },

    {
        id: Math.random(), 
        first_name: "Adam", 
        last_name: "Bren", 
        phone: "098-124-950", 
        email: "adambren@gmail.com", 
        country: "Norway"
    },

    {
        id: Math.random(), 
        first_name: "Bill", 
        last_name: "Grand", 
        phone: "087-111-793", 
        email: "billgrand@gmail.com", 
        country: "Brasil"
    }
];

export default {
  name: 'userdetails',
  data () {
    return {
        user: ''
    }
  },
  methods: {
          saveUsers() {
        localStorage.setItem('users', JSON.stringify(initialUsers));
        let result = localStorage.getItem('users');
        initialUsers = JSON.parse(result);
        console.log(initialUsers)
        this.user = user.id;
      }
  },
      created: function() {
      this.saveUsers(this.$route.params.id);
      
  }
}
</script>

<style>

</style>
