<script>
const nuxtApp = useNuxtApp()

export default {
  name: 'SilentRenew',
  async mounted() {
    if (!nuxtApp.$identity) {
      console.error('[SilentRenew] $identity not available')
      return
    }

    try {
      await nuxtApp.$identity.manager.signinSilentCallback()
    }
    catch (error) {
      console.error('[SilentRenew] Silent signin failed:', error)
    }
  },
}
</script>

<template>
  <div />
</template>
