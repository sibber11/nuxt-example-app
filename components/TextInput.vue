<template>
  <div class="flex flex-col gap-4">
    <label class="">{{ label }}</label>
    <input class="rounded" :value="modelValue" @input="$emit('update:modelValue', $event.target?.value)" v-bind="$attrs">
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: String,
  modelValue: String,
  type: {
    type:String,
    default: 'text'
  }
})
const emit = defineEmits(['update:modelValue'])
</script>

<style></style>