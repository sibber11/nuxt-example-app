<template>
  <div class="space-y-4 m-8">
    <Product v-for="product in products" :product="product" />
  </div>
</template>

<script lang="ts" setup>
const { data: products } = await useFetch('/api/products', {
  key: 'products'
});
if (!products.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'No Products Found'
  })
}
</script>