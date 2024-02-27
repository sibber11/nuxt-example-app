<template>
  <div class="flex flex-col gap-4">
    <label class="">{{ label }}</label>
    <input class="rounded" v-bind="$attrs" v-model="value">
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: String,
})

defineOptions({
  inheritAttrs: false
})

const value = defineModel();

</script>

<style></style>