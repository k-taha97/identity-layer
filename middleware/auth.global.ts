export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server)
    return

  const { $identity } = useNuxtApp()

  if (!$identity.enabled)
    return

  const authorizeMeta = to.meta?.authorize === undefined ? true : to.meta.authorize
  if (!authorizeMeta)
    return

  const user = await $identity.manager.getUser()

  if (!user || user.expired)
    return navigateTo('/connect/welcome')
})
