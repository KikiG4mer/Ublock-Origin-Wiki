<script setup>
import { browsers } from './browserData'
</script>

<template>
  <div class="compat-section">
    <div class="browser-grid">
      <a v-for="card in browsers" :key="card.name" :href="card.link" class="browser-card">
        <div class="browser-card-icon"><img class="b-icon" :src="card.img" :alt="card.name"></div>
        <div class="browser-card-name">{{ card.name }}</div>
        <div class="browser-card-status" :class="card.statusClass">
          <span class="status-dot"></span> {{ card.status }}
        </div>
      </a>
    </div>

    <div class="table-wrap">
      <table class="wiki-table">
        <thead>
          <tr>
            <th>Browser</th>
            <th>uBO Full Support</th>
            <th>Method</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img class="b-icon" src="https://cdn.worldvectorlogo.com/logos/firefox-6.svg" alt="Firefox"> Firefox</td>
            <td><span class="badge badge-green">✓ Full</span></td>
            <td>Official Add-ons Store</td>
            <td><span class="badge badge-green">Easy</span></td>
          </tr>
          <tr>
            <td><img class="b-icon" src="https://cdn.worldvectorlogo.com/logos/chrome-modern-.svg" alt="Chrome"> Chrome 127+</td>
            <td><span class="badge badge-red">✗ MV3 Only</span></td>
            <td>Developer Mode sideload</td>
            <td><span class="badge badge-yellow">Medium</span></td>
          </tr>
          <tr>
            <td><img class="b-icon" src="https://cdn.worldvectorlogo.com/logos/microsoft-edge-1.svg" alt="Edge"> Edge</td>
            <td><span class="badge badge-yellow">⚠ Partial</span></td>
            <td>Developer Mode or Edge Add-ons</td>
            <td><span class="badge badge-yellow">Medium</span></td>
          </tr>
          <tr>
            <td><img class="b-icon" src="https://www.svgrepo.com/show/378777/brave-2.svg" alt="Brave"> Brave</td>
            <td><span class="badge badge-green">✓ Full</span></td>
            <td>Chrome Web Store (MV2 still works)</td>
            <td><span class="badge badge-green">Easy</span></td>
          </tr>
          <tr>
            <td><img class="b-icon" src="https://cdn.worldvectorlogo.com/logos/firefox-6.svg" alt="Firefox ESR"> Firefox ESR</td>
            <td><span class="badge badge-green">✓ Full</span></td>
            <td>Official Add-ons Store</td>
            <td><span class="badge badge-green">Easy</span></td>
          </tr>
          <tr>
            <td><img class="b-icon" src="https://cdn.worldvectorlogo.com/logos/safari-3.svg" alt="Safari"> Safari</td>
            <td><span class="badge badge-red">✗ Not Available</span></td>
            <td>AdGuard for Safari instead</td>
            <td><span class="badge badge-yellow">Medium</span></td>
          </tr>
          <tr>
            <td><img class="b-icon" src="https://cdn.worldvectorlogo.com/logos/opera-2.svg" alt="Opera"> Opera/GX</td>
            <td><span class="badge badge-red">✗ MV3 Only</span></td>
            <td>Use Firefox or Brave instead</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.compat-section { margin: 24px 0; }
.browser-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
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
.table-wrap { overflow: auto; border-radius: 10px; }
.wiki-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
.wiki-table th {
  font-family: monospace; font-size: 10px;
  letter-spacing: 1px; text-transform: uppercase;
  color: var(--vp-c-text-3); text-align: left;
  padding: 12px 16px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}
.wiki-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
.wiki-table tr:hover td { background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); }
.badge {
  display: inline-block; padding: 2px 8px; border-radius: 4px;
  font-family: monospace; font-size: 10px; font-weight: 500;
}
.badge-red { background: rgba(230,48,48,0.08); color: #e63030; border: 1px solid rgba(230,48,48,0.2); }
.badge-green { background: rgba(48,192,96,0.08); color: #40a060; border: 1px solid rgba(48,192,96,0.2); }
.badge-yellow { background: rgba(230,160,48,0.08); color: #c09030; border: 1px solid rgba(230,160,48,0.2); }
</style>