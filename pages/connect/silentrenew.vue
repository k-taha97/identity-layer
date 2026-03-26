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
  <div>
    <h1>Silent Renew</h1>
    <p>Processing silent renew...</p>
  </div>
</template>
