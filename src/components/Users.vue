<template>
  <div class="users container">
      <h1 class="page-header">Manage Users</h1>
      <table class="table table-striped">
          <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Country</th>
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
              </tr>
          </tbody>
        </table> 
  </div>
</template>

<script>

let users = [

    {
        id: 1,
        first_name: 'Sam', 
        last_name: 'Smith', 
        phone: "345-777-888", 
        email: 'smith@gmail.com',
        country: 'USA'
    },

    {
        id: 2, 
        first_name: "Pol", 
        last_name: "Berby", 
        phone: "999-485-935", 
        email: "polby@gmail.com", 
        country: "Great Britain"
    },

    {
        id: 3, 
        first_name: "Adam", 
        last_name: "Bren", 
        phone: "098-124-950", 
        email: "adambren@gmail.com", 
        country: "Norway"
    },

    {
        id: 4, 
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
      users: []
    }
  },
  methods: {
          saveUsers() {
        localStorage.setItem('users', JSON.stringify(users));
        let result = localStorage.getItem('users');
        users = JSON.parse(result);
        this.users = users;
      }
  },
      created: function() {
      this.saveUsers();
      
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