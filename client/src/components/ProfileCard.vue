<template>
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
