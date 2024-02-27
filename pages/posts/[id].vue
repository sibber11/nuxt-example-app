<template>
  <div class="text-xl m-8 p-4 bg-white shadow rounded">
    <div>Name: {{ post.name }}</div>
    <div>Author: {{ post.author }}</div>
    <div>Posted At: {{ post.postedAt }}</div>
    <div>
      <div class="my-4"></div>
      <code>
          {{ post.body }}
        </code>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data: post } = await useFetch('/api/posts/' + route.params.id);
</script>

<style></style>