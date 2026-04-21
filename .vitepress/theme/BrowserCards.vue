<script setup>
import { browsers } from './browserData'
</script>

<template>
  <div class="browser-grid">
    <a v-for="card in browsers" :key="card.name" :href="card.link" class="browser-card">
      <div class="browser-card-icon"><img class="b-icon" :src="card.img" :alt="card.name"></div>
      <div class="browser-card-name">{{ card.name }}</div>
      <div class="browser-card-status" :class="card.statusClass">
        <span class="status-dot"></span> {{ card.status }}
      </div>
    </a>
  </div>
</template>

<style scoped>

.browser-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  margin: 24px 0;
}
.browser-card {
  padding: 18px 16px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.2s;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  display: block;
}
.browser-card:hover {
  color: #8b2222;
  background: var(--vp-c-bg-mute);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  border-color: var(--vp-c-brand-1);
}
.b-icon { width: 28px; height: 28px; display: inline-block; vertical-align: middle; }
.browser-card-icon { margin-bottom: 10px; }
.browser-card-name { font-weight: 700; font-size: 14px; margin-bottom: 4px; }
.browser-card-status { font-size: 11px; display: flex; align-items: center; gap: 5px; font-family: monospace; }
.status-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.status-ok { color: #30c060; }
.status-warn { color: #e6a030; }
.status-dead { color: #e63030; }
.status-info { color: #757575; }
</style>