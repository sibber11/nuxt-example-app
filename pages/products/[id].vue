<template>
  <div class="my-4 p-4 bg-white rounded shadow grid grid-cols-2">
    <div class="w-72 flex items-center">
      <img :src="product?.image" alt="">
    </div>
    <div class="p-4">
      <div class="font-bold">{{ product?.title }}</div>
      <div>Category: {{ product?.category }}</div>
      <div>Rating: {{ product?.rating.rate }} ({{ product?.rating.count }})</div>
      <div>Price: {{ product?.price }}</div>
      <div>Description: {{ product?.description }}</div>
      <CustomButton class="mt-4" @click="cartStore.add(product)">Add to Cart</CustomButton>
    </div>
  </div>
</template>

<script lang="ts" setup>

const { id } = useRoute().params;
const { data: product } = await useFetch(`/api/products/${id}`);
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found'
  })
}

const cartStore = useMyCartStore();

</script>