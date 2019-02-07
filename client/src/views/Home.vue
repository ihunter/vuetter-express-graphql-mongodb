<template>
</template>

<script>
import errorMixin from '@/mixins/error'

export default {
  name: 'home',
  mixins: [errorMixin],
  components: {
    Vueets: () => import('@/components/Vueets'),
    ProfileCard: () => import('@/components/ProfileCard')
  }
}
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
