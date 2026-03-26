<script setup lang="ts">
const nuxtApp = useNuxtApp()

definePageMeta({
  layout: false,
  authorize: false,
})

const { t } = useI18n()

// const colorMode = useColorMode()
// const colorModeListener = computed(() => {
//   if (colorMode.value === 'system') {
//     if (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
//       return 'dark'
//     else
//       return 'light'
//   }
//   return colorMode.value
// })

onMounted(() => {
  if (nuxtApp.$identity) {
    nuxtApp.$identity.manager.signoutCallback()
  }
})

function login() {
  if (!nuxtApp.$identity) {
    console.error('[Welcome] $identity not available')
    return
  }
  return nuxtApp.$identity.manager.signinRedirect()
}
</script>

<template>
  <ClientOnly>
    <div class="container-welcome">
      <div class="container-img">
        <!-- <img v-if="colorModeListener === 'dark'" class="img-welcome" src="/images/login-dark.svg" alt="welcome"> -->
        <img class="img-welcome" src="/images/login-light.svg" alt="login light">
        <!-- <img v-if="colorModeListener === 'dark'" src="/images/bg-shape-image-dark.png" alt="BgDark" class="img-shape"> -->
        <img src="/images/bg-shape-image-light.png" alt="BgDark" class="img-shape">
      </div>
      <div class="container-form bg-card-welcome">
        <div>
          <h3>{{ t('layers.identity.pages.connect.welcome') }}! 👋🏻</h3>
          <p>{{ t('layers.identity.pages.connect.description') }}</p>
          <button class="btn-welcome" @click="login">
            {{ t('layers.identity.pages.connect.login') }}
          </button>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="scss">
.container-welcome {
  display: flex;
  min-height: 100vh;
}

.container-img {
  position: relative;
  display: none;
  height: 100vh;
  min-height: 100vh;
  flex-basis: 65%;
}

@media screen and (min-width: 768px) {
  .container-img {
    display: flex;
  }
}

.img-welcome {
  z-index: 10;
  margin: auto;
  height: auto;
  max-width: 100%;
  width: 65%;
  border-radius: 0.375rem;
  object-fit: contain;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
}

.container-form {
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

@media screen and (min-width: 768px) {
  .container-form {
    flex-basis: 35%;
  }
}

.btn-welcome {
  width: 35%;
  overflow: hidden;
  position: relative;
  display: inline-flex;
  cursor: pointer;
  user-select: none;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: inherit;
  font-feature-settings: inherit;
  outline-color: transparent;
  border-radius: 6px;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s,
    outline-color 0.2s,
    box-shadow 0.2s;
}

.img-shape {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 35%;
}
</style>
