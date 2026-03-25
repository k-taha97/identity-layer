import type { AuthProvide } from './types/authProvide'

declare module '#app' {
  interface NuxtApp {
    $identity: AuthProvide
  }
}

export {}
