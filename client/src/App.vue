<template>
</template>

<script>
import { mapActions } from 'vuex'

import VueetDialog from '@/components/VueetDialog'

export default {
  name: 'app',
  components: {
    VueetDialog
  },
  data () {
    return {
      dialogVueet: false
    }
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style>

</style>
