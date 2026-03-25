<script setup lang="ts">
const router = useRouter()

definePageMeta({
  layout: false,
  authorize: false,
})

const { $identity } = useNuxtApp()

onMounted(() => {
  $identity.manager.signinRedirectCallback().then((user) => {
    $identity.manager.storeUser(user)
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
