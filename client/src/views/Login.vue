<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :md="12">
      <LoginForm />
    </el-col>
  </el-row>
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
