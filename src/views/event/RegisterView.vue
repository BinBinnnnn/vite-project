<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router'
import router from '@/router'
const props = defineProps<{
  event: Event
  id: string
}>()

const { event } = toRefs(props)
const register = () => {
  // If the registration API call successful
  // Push back to the event details view
}
router.push({ name: 'event-detail-view' })
</script>
<template>
  <p>Register event here</p>
</template>
