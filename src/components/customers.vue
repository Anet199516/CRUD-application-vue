<template>
  <div class="customers container">
      <h1 class="page-header">Manage Customers</h1>
  </div>
</template>

<script>
export default {
  name: 'customers',
  data () {
    return {
      customers: []
    }
  },
  methods: {
            fetchCustomers() {
          this.$http.get(`./src/customers.json`)
          .then((response) => {
              console.log(response.body);
          })
      }
  },
      created: function() {
      this.fetchCustomers();
  }
}



</script>

<style>

</style>