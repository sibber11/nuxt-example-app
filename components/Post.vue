<template>
  <NuxtLink :to="'/posts/'+post.id" class="px-4 block rounded p-4 shadow bg-white">
    <div class="font-bold">{{ post.name }}</div>
    <div class="text-sm">Author: {{ post.author }}</div>
    <div class="text-sm">Posted At: {{ post.postedAt }}</div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps(['post'])
</script>

<style>

</style>