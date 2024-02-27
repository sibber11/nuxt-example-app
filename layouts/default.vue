<template>
  <div class="flex justify-between p-4 px-8 bg-white items-center shadow">
    <div class="flex gap-4 items-center">
      <NuxtLink to="/" class="text-lg font-bold">Website</NuxtLink>
      <NuxtLink to="/posts" class="p-2 font-bold">
        Posts
      </NuxtLink>
      <NuxtLink to="/posts" class="p-2 font-bold">
        Products
      </NuxtLink>
    </div>
    <div class="flex flex-nowrap gap-4 flex-row">
      <CustomButton @click="auth.logout()">
        Logout
      </CustomButton>
    </div>
  </div>
  <div class="container mx-auto">
    <slot />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
})
const auth = useMyAuthStore();
</script>

<style></style>