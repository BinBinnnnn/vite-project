<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { Student } from '@/type'
import { ref, onMounted } from 'vue'
import { getStudents } from '@/services/StudentService'

const students = ref<Student[]>([]) // 将响应式数据名称改为 students

onMounted(() => {
  getStudents()
    .then(response => {
      students.value = response.data
    })
    .catch(error => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <div>
    <h1>Students Information</h1>
    <div class="student-cards">
      <!-- 确保使用正确的类名 -->
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :student="student"
      />
    </div>
  </div>
</template>
<style scoped>
.student-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
