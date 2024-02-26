<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="p-8 max-w-lg mx-auto bg-white my-auto min-w-96">
      <div class="text-center text-2xl font-bold mb-8">
        Website Logo
      </div>
    <form class="flex flex-col gap-4" @submit.prevent="submit">
      <TextInput label="User Name" v-model="form.name" />
      <TextInput label="Password" v-model="form.password" type="password" />
      <CustomButton class="h-[42px]">Login</CustomButton>
    </form>
  </div>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  middleware: ['guest']
})

const form = ref({
  name: '',
  password: ''
})

const auth = useMyAuthStore();

async function submit() {
  const post = await $fetch('/api/login', {
    method: 'post', 
    body: form.value,
    onResponse({ request, response, options }) {
      auth.login(response._data.token)
      navigateTo('/');
    },
  })
}
</script>

<style></style>