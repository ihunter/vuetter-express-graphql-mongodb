<template>
  <el-container>
    <el-header></el-header>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import auth from '@/api/auth'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      users: []
    }
  },
  methods: {
    ...mapActions(['setToken']),
    async fetchUsers () {
      try {
        const res = await auth.users()
        this.users = res.data.data.users
      } catch (error) {
        console.error(error)
      }
    },
    async login () {
      const email = 'ijh.hunter@gmail.com'
      const password = 'asdfasdf'

      try {
        const res = await auth.login(email, password)
        const { token } = res.data.data.login
        this.setToken(token)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style>

</style>
