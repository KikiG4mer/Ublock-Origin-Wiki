<script setup>
defineProps({
  image: String,
  imageWidth: { type: String, default: '200px' },
  title: String,
  text: String,
  buttonText: String,
  buttonLink: String,
})
</script>

<template>
  <div class="wide-card">
    <div class="wide-card-image">
      <img :src="image" :style="{ width: imageWidth }" />
    </div>
    <div class="wide-card-content">
      <h3 class="wide-card-title">{{ title }}</h3>
      <p class="wide-card-text">{{ text }}</p>
      <a v-if="buttonText && buttonLink" :href="buttonLink" class="wide-card-btn">
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.wide-card {
  display: flex;
  align-items: flex-start;
  gap: 40px;
  background: var(--vp-c-bg-soft);
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 32px;
  margin: 24px 0;
  text-decoration: none;
  color: inherit;
}
.wide-card-image img {
  display: block;
  object-fit: contain;
}
.wide-card-content {
  flex: 1;
  padding-top: 8px;
}
.wide-card-title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--vp-c-text-1) !important;
}
.wide-card-text {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.7;
  margin-bottom: 20px;
}
.wide-card-btn {
  display: inline-block;
  padding: 8px 20px;
  background: var(--vp-c-brand-3);
  color: white !important;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.2s;
}
.wide-card-btn:hover {
  background: var(--vp-c-brand-2);
}
</style>