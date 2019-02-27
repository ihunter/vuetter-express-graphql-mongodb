<template>
  <div>
    <article class="vueet" v-for="vueet in vueets" :key="vueet.id">
      <div>
      {{ vueet.author.name }}
      </div>
      <div>
      {{ vueet.content }}
      </div>
    </article>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import loading from '@/mixins/loading'

export default {
  name: 'vueets',
  mixins: [loading],
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
