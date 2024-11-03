<template>
  <div class="student-card">
    <h1>{{ student.name }}</h1>
    <span>{{ student.surname }}</span>
    <h3>GPA: {{ student.gpa }}</h3>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Student } from '@/types' // 假设你已经定义了Student类型

defineProps<{
  student: Student
}>()
</script>

<style scoped>
.student-card {
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

.student-card:hover {
  transform: translateY(-8px); /* 鼠标悬停时上移 */
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.55); /* 鼠标悬停时阴影加深 */
}

.student-card h2 {
  margin: 0;
  font-size: 1.5em;
  font-weight: 600;
}

.student-card span {
  display: block;
  margin-top: 5px;
  font-size: 1em;
  color: #e0e0e0; /* 次要文字颜色 */
}

.student-card div {
  margin-top: 10px;
  font-size: 1.2em;
  font-weight: 500;
}
</style>
