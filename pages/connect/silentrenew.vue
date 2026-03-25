<script>
const { $identity } = useNuxtApp()

export default {
  name: 'SilentRenew',
  mounted() {
    $identity.manager.signinSilentCallback()
  },
}
</script>

<template>
  <div />
</template>
