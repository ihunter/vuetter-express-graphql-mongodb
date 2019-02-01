<template>
  <el-container>
    <el-header>
      <el-menu mode="horizontal" :router="true">
        <el-menu-item index="1" :route="{ name: 'home' }">Home</el-menu-item>
        <el-menu-item index="2" :route="{ name: 'login' }">Login</el-menu-item>
        <el-menu-item index="3">Home</el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

</style>
