<template>
  <div class="m-8">
    <div class="text-5xl bg-white mt-4 p-4 rounded shadow">
      Welcome to the nuxt app.
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth']
})
</script>

<style></style>