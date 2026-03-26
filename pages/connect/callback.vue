<script setup lang="ts">
const router = useRouter()

definePageMeta({
  layout: false,
  authorize: false,
})

const nuxtApp = useNuxtApp()

onMounted(() => {
  if (!nuxtApp.$identity) {
    console.error('[Callback] $identity not available')
    return
  }

  nuxtApp.$identity.manager.signinRedirectCallback().then((user) => {
    nuxtApp.$identity.manager.storeUser(user)
    router.push('/')
  }).catch((e) => {
    console.error(e)
  })
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'Callback',
})
</script>

<template>
  <div />
</template>
