import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['error'])
  },
  watch: {
    error (newValue) {
      this.$notify.error({
        title: 'Error',
        message: `${newValue}`
      })
    }
  }
}
