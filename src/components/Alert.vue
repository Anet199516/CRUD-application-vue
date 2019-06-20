<template>
<div class="alert alert-primary alert-dismissible fade show" role="alert">
  <strong>{{message}}</strong>
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  
</template>

<script>
export default {
  name: 'alert',
  props: ['message'],
  data () {
    return {
      
    }
  }
}
</script>


<style scoped>

.alert {
  margin-top: 25px;
}

</style>