<template>
  <div class="add container">
  <Alert v-if="alert" message="Fill in all fields" />
    <h1 class="page-header">Add User</h1>
    <form v-on:submit="addUser">
      <div class="well">
            <div class="form-group">
               <h4>User Info</h4>
                <label>First Name</label>
                <input type="text" class="form-control" placeholder="First Name" v-model="user.first_name">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" placeholder="Last Name" v-model="user.last_name">
            </div>
            </div>
        <div class="well">
            <h4>UserContact</h4>
            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" placeholder="Email" v-model="user.email">
            </div>
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" placeholder="Phone" v-model="user.phone">
            </div>
        </div>

        <div class="well">
            <h4>User Location</h4>
            <div class="form-group">
                <label>Country</label>
                <input type="text" class="form-control" placeholder="Country" v-model="user.country">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
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
  name: 'add',
  data () {
    return {
      user: {},
      alert: '',
    }
  },
  methods: {
    addUser(event) {
      event.preventDefault();
      if(!this.user.first_name || !this.user.last_name || !this.user.email 
        || !this.user.phone || !this.user.country) {
        this.alert = 'Fill in all fields';
      } else { 
        
        let newUser = {
          id: Math.random().toFixed(2),
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email: this.user.email,
          phone: this.user.phone,
          country: this.user.country,
        }
        
        let result = localStorage.getItem('users');
        initialUsers = JSON.parse(result);
        initialUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(initialUsers))

        this.$router.push({path: '/', query: {alert: 'User Added'}});
      }
    }
  },

  components: {
    Alert
  }
}
</script>

<style>

.page-header {
  margin-top: 20px;
}

.well {
  padding: 10px 10px;
  background-color: rgb(248, 242, 242);
  border: 1px solid rgb(218, 209, 209);
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
}

</style>