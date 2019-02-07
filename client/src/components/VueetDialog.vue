<template>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'vueet-dialog',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        content: ''
      }
    }
  },
  methods: {
    ...mapActions(['createVueet']),
    submit () {
      this.createVueet(this.form)
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
