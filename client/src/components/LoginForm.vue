<template>
</template>

<script>
import { mapActions } from 'vuex'

import mixin from '@/mixins/loading'

export default {
  name: 'login-form',
  mixins: [mixin],
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    submit () {
      this.login(this.form)
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
