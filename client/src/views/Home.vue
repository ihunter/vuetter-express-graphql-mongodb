<template>
  <v-container>
    <v-layout justify-center>
      <div class="profile-card">
        <ProfileCard />
      </div>
    
      <div class="vueets">
        <Vueets />
      </div>
      
      <div class="asdf"></div>
    </v-layout>
  </v-container>
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
.profile-card {
  width: 300px;
  min-height: 200px;
  background: #8435ce;
}

.vueets {
  width: 600px;
  min-height: 1000px;
  padding: 0;
  margin: 0 16px;
  background: #8435ce;;
}

.asdf {
  width: 300px;
  min-height: 200px;
  background: #8435ce;;
}
</style>
