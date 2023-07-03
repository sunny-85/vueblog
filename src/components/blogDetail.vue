<template>
  <!-- {{}} -->
  <h4>{{blog[$route.params.id].title}}</h4>
  <p>{{blog[$route.params.id].date}}</p>
  <hr>
  <div>
    {{blog[$route.params.id].content}}
  </div>
  <hr>
  <div class="mt-4">
    <router-link to="/list">List</router-link>
  </div>
</template>

<script>
export default {
  name : 'blogList',
  props : {
    blog : Array
  }

}
</script>

<style>

</style>