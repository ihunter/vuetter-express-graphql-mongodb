<template>
</template>

<script>
import errorMixin from '@/mixins/error'

export default {
  name: 'login-form',
  mixins: [errorMixin],
  components: {
    LoginForm: () => import('@/components/LoginForm')
  }
}
</script>

<style>

</style>
