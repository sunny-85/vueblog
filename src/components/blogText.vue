<template>
  <div>
    <h4><router-link to="/detail">{{ blog[0].title }}</router-link></h4>
    <p>{{ blog[0].date }}</p>
  </div>
  <div>
    <h4>{{ blog[1].title }}</h4>
    <p>{{ blog[1].date }}</p>
  </div>
  <div>
    <h4>{{ blog[2].title }}</h4>
    <p>{{ blog[2].date }}</p>
  </div>
  <router-link to="/">home</router-link>
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