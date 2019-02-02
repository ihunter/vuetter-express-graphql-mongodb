<template>
  <el-card :body-style="{ padding: 0 }" v-loading="loadingUser">
    <img src="https://via.placeholder.com/350x150" alt="placeholder" class="image">

    <el-row>
      <el-col>
        <span class="name">{{ user.name }}</span>
      </el-col>
    </el-row>

    <el-row class="content">
      <el-col :span="8">
        <div>
          Vueets
        </div>
        <div>
          {{ user.vueets.length }}
        </div>
      </el-col>

      <el-col :span="8">
        <div>
          Following
        </div>
        <div>
          {{ user.following.length }}
        </div>
      </el-col>

      <el-col :span="8">
        <div>
          Followers
        </div>
        <div>
          {{ user.followers.length }}
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'

import mixin from '@/mixins/loading'

export default {
  name: 'profile-card',
  mixins: [mixin],
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
.image {
  width: 100%;
}

.name {
  padding: 0 1rem;
}

.content {
  text-align: center;
}
</style>
