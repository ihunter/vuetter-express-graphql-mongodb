<template>
  <div>
    <article v-for="vueet in vueets" :key="vueet._id" class="vueet">
      <p>{{ vueet.author.name }}</p>
      <p>{{ vueet.content }}</p>
    </article>
  </div>
</template>

<script>
import vueet from '@/api/vueet'

export default {
  name: 'vueets',
  data () {
    return {
      vueets: []
    }
  },
  async mounted () {
    const res = await vueet.index()
    this.vueets = res.data.data.vueets
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
