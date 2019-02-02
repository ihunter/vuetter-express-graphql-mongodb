<template>
  <el-dialog title="Compose new Vueet" :visible="show" @close="$emit('close')">
    <el-form :model="form">
      <el-input
        type="textarea"
        :rows="10"
        placeholder="Enter message here"
        v-model="form.content"
      />
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('close')">Cancel</el-button>
      <el-button type="primary" @click="submit">Confirm</el-button>
    </span>
  </el-dialog>
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
