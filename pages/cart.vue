<template>
  <div class="space-y-4 p-4 bg-white rounded shadow m-4 divide-y">
    <template v-if="cartStore.cart.data.length > 0">
      <div v-for="(c, id) in cartStore.cart.data" class="flex justify-between items-center py-4">
        <div class="font-bold">{{ c.product.title }}</div>
        <div class="flex gap-4 items-center">
          <div class="font-bold whitespace-nowrap">QTY: {{ c.qty }}</div>
          <CustomButton class="bg-red-500" @click="cartStore.remove(id)">Remove</CustomButton>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="text-2xl font-bold">
        Cart is empty
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
const cartStore = useMyCartStore();
</script>