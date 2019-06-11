<template>
  <div class="add container">
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
export default {
  name: 'add',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    addUser(event) {
      if(!this.user.first_name || !this.user.last_name) {
        console.log('Please fill in all required fields');
      } else { 
        let newUser = {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email: this.user.email,
          phone: this.user.phone,
          country: this.user.country,
        }
        
        localStorage.setItem('user', JSON.stringify(newUser));
        this.$router.push({path: '/'});

        event.preventDefault();
      }
      event.preventDefault();
    }
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