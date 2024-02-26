<template>
  <div class="py-4 px-8 shadow bg-white">
    <NuxtLink to="/" class="text-2xl font-bold">Posts</NuxtLink>
  </div>
  <div class="space-y-4 m-8">
    <Post v-for="post in posts" :post="post"/>
  </div> 
</template>

<script lang="ts" setup>

const {data:posts} = await useFetch('/api/posts');

</script>

<style>

</style>