import store from '@/store'

export default (to, form, next) => {
  if (store.getters.token) return next()

  return next('/login')
}
