<script setup lang="ts">
import { type Event } from '@/types'
defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink
    class="event-link"
    :to="{ name: 'event-detail-view', params: { id: event.id } }"
  >
    <div class="event-card">
      <h2>{{ event.title }}</h2>
      <span>@{{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.organizer }}</h4>
    </div>
  </RouterLink>
</template>
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border-radius: 8px; /* 圆角边框 */
  background: linear-gradient(45deg, #10dd7e 0%, #2575fc 100%); /* 渐变背景色 */
  color: #ffffff; /* 文字颜色 */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* 平滑过渡效果 */
  margin-bottom: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}

.event-link {
  text-decoration: none;
  color: #2c3e50;
}

.event-card:hover {
  transform: translateY(-8px); /* 鼠标悬停时上移 */
  box-shadow: 0 12px 12px rgba(0, 0, 0, 0.55); /* 鼠标悬停时阴影加深 */
}

.event-card h2 {
  margin: 0;
  font-size: 1.5em;
  font-weight: 600;
}

.event-card span {
  display: block;
  margin-top: 5px;
  font-size: 1em;
  color: #e0e0e0; /* 次要文字颜色 */
}

.event-card h4 {
  margin-top: 10px;
  font-size: 1.2em;
  font-weight: 500;
}
</style>
