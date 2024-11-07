<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router'
const props = defineProps<{
  event: Event
  id: string
}>()
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const Edit = () => {
  store.updateMessage(
    'You are successuflly updated the data for ' + props.event.title,
  )
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view' })
}
</script>

<template>
  <p>Edit event here</p>
  <button @click="Edit">Edit</button>
</template>
