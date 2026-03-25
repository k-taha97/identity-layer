import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      identity: {
        authority: process.env.NUXT_PUBLIC_IDENTITY_SETTINGS_AUTHORITY,
        clientId: process.env.NUXT_PUBLIC_IDENTITY_SETTINGS_CLIENT_ID,
        responseType: process.env.NUXT_PUBLIC_IDENTITY_SETTINGS_RESPONSE_TYPE,
        scope: process.env.NUXT_PUBLIC_IDENTITY_SETTINGS_SCOPE,
        redirectUri: process.env.NUXT_PUBLIC_IDENTITY_SETTINGS_REDIRECT_URI,
        postLogoutRedirectUri: process.env.NUXT_PUBLIC_IDENTITY_SETTINGS_POST_LOGOUT_REDIRECT_URI,
        silentRedirectUri: process.env.NUXT_PUBLIC_IDENTITY_SETTINGS_SILENT_REDIRECT_URI,
        automaticSilentRenew: process.env.NUXT_PUBLIC_IDENTITY_SETTINGS_AUTOMATIC_SILENT_RENEW === 'true',
      },
    },
  },

  css: [
    join(currentDir, './assets/scss/index.scss'),
  ],

  // modules: [
  //   '@nuxtjs/i18n',
  // ],

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
