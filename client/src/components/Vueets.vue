<template>
  <div v-loading="loadingVueets">
    <article v-for="vueet in vueets" :key="vueet._id" class="vueet">
      <p>{{ vueet.author.name }}</p>
      <p>{{ vueet.content }}</p>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import mixin from '@/mixins/loading'

export default {
  name: 'vueets',
  mixins: [mixin],
  methods: {
    ...mapActions(['fetchVueets'])
  },
  computed: {
    ...mapGetters(['vueets'])
  },
  mounted () {
    this.fetchVueets()
  }
}
</script>

<style scoped>
.vueet {
  border: 1px solid grey;
  border-bottom: 0;
  padding: 1rem;
}

article:last-of-type {
  border-bottom: 1px solid grey;
}
</style>
