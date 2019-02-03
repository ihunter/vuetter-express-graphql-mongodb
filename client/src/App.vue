<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" :router="true">
        <el-menu-item index="1" :route="{ name: 'home' }">Home</el-menu-item>
        <el-menu-item index="2" :route="{ name: 'login' }">Login</el-menu-item>
        <el-button type="primary" @click="logout" round>Logout</el-button>
        <el-button type="primary" @click="dialogVueet = true" round>Primary</el-button>
      </el-menu>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>

    <VueetDialog @close="dialogVueet = false" :show="dialogVueet" />
  </el-container>
</template>

<script>
import { mapActions } from 'vuex'

import VueetDialog from '@/components/VueetDialog'

export default {
  name: 'app',
  components: {
    VueetDialog
  },
  data () {
    return {
      dialogVueet: false
    }
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style>

</style>
