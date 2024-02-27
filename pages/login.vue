<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="p-8 max-w-lg mx-auto bg-white my-auto min-w-96">
      <div class="text-center text-2xl font-bold mb-8">
        Website Logo
      </div>
      <form class="flex flex-col gap-4" @submit.prevent="submit">
        <TextInput label="User Name" v-model="form.name" name="email" />
        <TextInput label="Password" v-model="form.password" type="password" />
        <CustomButton class="h-[42px]">Login</CustomButton>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  middleware: ['guest'],
  layout: 'login'
})

const form = ref({
  name: '',
  password: ''
})

const auth = useMyAuthStore();

async function submit() {
  auth.login(form.value.name, form.value.password);
}
</script>

<style></style>