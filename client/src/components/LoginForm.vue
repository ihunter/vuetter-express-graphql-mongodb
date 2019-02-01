<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-form-item label="Email">
      <el-input type="email" v-model="form.email" name="email"></el-input>
    </el-form-item>

    <el-form-item label="Password">
      <el-input type="password" v-model="form.password" name="password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button @click="login" type="primary">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapActions } from 'vuex'

import auth from '@/api/auth'

export default {
  name: 'login-form',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['setToken', 'setUser']),
    async login () {
      try {
        const res = await auth.login(this.form)
        const { token, user } = res.data.data.login
        console.log(user)
        this.setUser(user)
        this.setToken(token)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
