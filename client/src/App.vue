<template>
  <v-app>
    <v-toolbar app dense flat>
      <v-toolbar-title>
        <span>Vuetter</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
