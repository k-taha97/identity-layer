import type { UserManagerSettings } from 'oidc-client-ts'
import type { AuthProvide } from '../types/authProvide'
import { UserManager } from 'oidc-client-ts'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const userManagerSettings = config.public.identity.settings as UserManagerSettings
  userManagerSettings.automaticSilentRenew = (String(config.public.identity.config.automaticSilentRenew).toLowerCase() === 'true')

  const authManger = new UserManager(userManagerSettings)
  return {
    provide: {
      identity: {
        enabled: (String(config.public.identity.enabled).toLowerCase() === 'true'),
        manager: authManger,
        config: userManagerSettings,
      } as AuthProvide,
    },
  }
})
