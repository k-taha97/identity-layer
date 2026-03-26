import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      identity: {
        authority: '',
        clientId: '',
        responseType: '',
        scope: '',
        redirectUri: '',
        postLogoutRedirectUri: '',
        silentRedirectUri: '',
        automaticSilentRenew: true,
      },
    },
  },

  css: [
    join(currentDir, './assets/scss/index.scss'),
  ],

  modules: [
    '@nuxtjs/i18n',
  ],

  alias: {
    '@identity': currentDir,
  },

  imports: {
    dirs: [
      join(currentDir, 'types'),
      join(currentDir, 'composables'),
      join(currentDir, 'utils'),
    ],
  },

  i18n: {
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'it', language: 'it-IT', name: 'Italiano', file: 'it.json' },
    ],
    strategy: 'no_prefix',
  },
})
