import type { UserManager, UserManagerSettings } from 'oidc-client-ts'

export interface AuthProvide {
  enabled: boolean
  manager: UserManager
  config: UserManagerSettings
}
