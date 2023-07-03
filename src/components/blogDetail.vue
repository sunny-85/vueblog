<template>
  <div>
    안녕하세요.<br>
    오늘은 즐거운 금요일입니다.
  </div>
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