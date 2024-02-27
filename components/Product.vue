<template>
  <NuxtLink :to="'/products/'+product.id" class="px-4 rounded p-8 shadow bg-white flex justify-between">
    <div>
      <div class="font-bold">{{ product.title }}</div>
    <div class="text-sm">Price: {{ product.price }}</div>
    <div class="text-sm">Rating: {{ product.rating.rate }}({{ product.rating.count }})</div>
    </div>
    <div class="w-32 p-4">
      <img :src="product.image" alt="product image" class="object-scale-down">
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps(['product'])
</script>

<style>

</style>