<template>
  <span class="ms" :style="{ color: color }">{{ name }}</span>
</template>

<script setup>
defineProps({
  name: String,
  color: {
    type: String,
    default: 'null'
  }
})
</script>