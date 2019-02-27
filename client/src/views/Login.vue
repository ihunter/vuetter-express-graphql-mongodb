<template>
  <v-container>
    <v-layout>
      <v-flex>
        <LoginForm />
      </v-flex>
    </v-layout>
  </v-container>
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
