<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :md="12">
      <LoginForm />
    </el-col>
  </el-row>
</template>

<script>
export default {
  components: {
    LoginForm: () => import('@/components/LoginForm')
  }
}
</script>

<style>

</style>
