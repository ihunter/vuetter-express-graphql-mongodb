<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="fetchUsers">Fetch Users</el-button>
      <el-button @click="login">Login</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import auth from '@/api/auth'
import { mapActions } from 'vuex'

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
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
        console.log(res.data.data.users)
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
