<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<template>
  <div class="text-center font-sans text-gray-700 antialias"></div>
  <header>
    <div id="flashMessage" class="animate-fade" v-if="message">
      <h4>{{ message }}</h4>
    </div>
    <h1>Deploy with Vercel</h1>

    <div class="wrapper">
      <nav class="py-6">
        <RouterLink
          class="font-bold text-gray-700"
          exact-active-class="text-green-500"
          :to="{ name: 'event-list-view' }"
          >Event</RouterLink
        >
        |
        <RouterLink
          class="font-bold text-gray-700"
          exact-active-class="text-green-500"
          :to="{ name: 'about' }"
          >About</RouterLink
        >
        <!-- |
        <RouterLink
          class="font-bold text-gray-700"
          exact-active-class="text-green-500"
          :to="{ name: 'student' }"
          >About</RouterLink
        > -->
        |
        <RouterLink
          class="font-bold text-gray-700"
          exact-active-class="text-green-500"
          :to="{ name: 'student-list-view' }"
          >Student</RouterLink
        >
        <!-- <RouterLink :to="{ name: 'event-list-view' }">Event</RouterLink> |
        <RouterLink :to="{ name: 'about' }">About</RouterLink> | 
        <RouterLink :to="{ name: 'student-list-view' }">Student</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}
#flashMessage {
  animation: yellofade 3s ease-in-out;
}
</style>
