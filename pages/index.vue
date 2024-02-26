<template>
  <div class="flex justify-between p-4 px-8 bg-white items-center shadow">
    <div class="flex gap-4 items-center">
      <div class="text-lg font-bold">Website Name</div>
      <NuxtLink to="/posts" class="p-2 font-bold">
        Posts
      </NuxtLink>
    </div>
    <div class="flex flex-nowrap gap-4 flex-row">
      <CustomButton @click="auth.logout()">
        Logout
      </CustomButton>
    </div>
  </div>
  <div class="px-8 text-5xl bg-white p-4 mt-4">
    <div class="container mx-auto">
      Welcome to the nuxt app.
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
})
const auth = useMyAuthStore();
</script>

<style></style>