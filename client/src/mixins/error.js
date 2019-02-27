import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['setError'])
  },
  computed: {
    ...mapGetters(['error'])
  }
}
