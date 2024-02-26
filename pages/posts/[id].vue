<template>
<div class="">
  <div class="py-4 px-8 shadow bg-white flex justify-between">
    <h1 class="text-2xl font-bold">Posts</h1>
    <NuxtLink to="/posts" class="font-bold">Go Back</NuxtLink>
  </div>
  <div class="text-xl m-8 p-4 bg-white shadow rounded">
    <div>Name: {{ post.name }}</div>
    <div>Author: {{ post.author }}</div>
    <div>Posted At: {{ post.postedAt }}</div>
    <div>
      <div class="my-4">
        
      </div> 
      <code>
        {{ post.body }}
      </code>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
const route = useRoute();

const {data:post} = await useFetch('/api/posts/'+route.params.id);
</script>

<style>

</style>