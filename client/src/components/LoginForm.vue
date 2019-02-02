<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Email">
      <el-input type="email" v-model="form.email" name="email"></el-input>
    </el-form-item>

    <el-form-item label="Password">
      <el-input type="password" v-model="form.password" name="password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button @click="submit" type="primary" :loading="loadingUser">Login</el-button>
    </el-form-item>
  </el-form>
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
