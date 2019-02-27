<template>
  <v-card>
    <v-alert
      :value="error"
      type="error"
      transition="scale-transition"
    >
      <div v-for="(e, i) in error" :key="i">
        {{ e }}
      </div>
    </v-alert>

    <v-card-text>
      <v-form ref="loginForm" v-model="valid" lazy-validation>
        <v-text-field
          v-model="form.email"
          :rules="rules.email"
          label="Email"
          type="email"
          name="email"
          required
        ></v-text-field>
        
        <v-text-field
          v-model="form.password"
          :rules="rules.password"
          label="Password"
          type="password"
          name="password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          @click="submit"
        >
          Login
        </v-btn>

        <v-btn
          color="success"
          @click="clear"
        >
          Clear
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

import loading from '@/mixins/loading'
import error from '@/mixins/error'

export default {
  name: 'login-form',
  mixins: [loading, error],
  data () {
    return {
      valid: true,
      form: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          v => !!v || 'Email is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        password: [
          v => !!v || 'Password is required'
        ]
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    submit () {
      this.login(this.form)
    },
    clear () {
      this.$refs.loginForm.reset()
      this.form.email = ''
      this.form.password = ''
      this.setError(null)
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
