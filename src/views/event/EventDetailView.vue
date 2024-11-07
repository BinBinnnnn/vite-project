<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router'
import EventService from '@/services/EventService'
const event = ref<Event | null>(null)
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})
const router = useRouter()
onMounted(() => {
  EventService.getEvent(parseInt(props.id))
    .then(response => {
      event.value = response.data
    })
    .catch(error => {
      console.error('There was an error!', error)
    })
})
</script>
<template>
  <div v-if="event">
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.location }}</p>
  </div>
</template>
