<template>

  <router-view :blog="blog"></router-view>
  <!-- <List :blog="blog" /> -->
</template>

<script>
// import List from './components/blogText.vue'
import blog from './assets/blog.js'

export default {
  name: 'App',
  data(){
    return{
      blog : blog
    }
  },
  components : {
    // List : List,
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
