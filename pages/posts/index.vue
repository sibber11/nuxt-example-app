<template>
  <div class="space-y-4 m-8">
    <Post v-for="post in posts" :post="post"/>
  </div> 
</template>

<script lang="ts" setup>

const {data:posts} = await useFetch('/api/posts');

</script>

<style>

</style>