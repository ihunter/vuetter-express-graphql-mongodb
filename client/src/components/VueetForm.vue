<template>
  <v-container>
    <v-layout>
      <v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'vueet-form',
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
    }
  }
}
</script>

<style>

</style>
