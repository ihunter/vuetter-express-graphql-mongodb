<template>
  <v-card flat tile>
    <v-img src="https://via.placeholder.com/500x300"></v-img>

    <v-card-title primary-title>
      <div>
        {{ user.name }}
      </div>
      <div>
        username
      </div>
    </v-card-title>

    <v-card-text>
      <v-container>
        <v-layout>
          <v-flex>
            <div>
              Vueets
            </div>
            <div>
              0
            </div>
          </v-flex>
          <v-flex>
            <div>
              Followers
            </div>
            <div>
              1
            </div>
          </v-flex>
          <v-flex>
            <div>
              Following
            </div>
            <div>
              3
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

import loading from '@/mixins/loading'

export default {
  name: 'profile-card',
  mixins: [loading],
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
</style>
