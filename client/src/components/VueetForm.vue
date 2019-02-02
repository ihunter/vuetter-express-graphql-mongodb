<template>
  <div>
    <el-form :model="form">
      <el-input
        type="textarea"
        :rows="10"
        placeholder="Enter message here"
        v-model="form.content"
      />
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Cancel</el-button>
      <el-button type="primary" @click="submit">Confirm</el-button>
    </span>
  </div>
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
