<template>
  <v-app>
    <toolbar />

    <navigation />

    <v-content>
      <v-container fluid>
        <v-progress-linear :indeterminate="true" v-if="this.$store.state.loading"></v-progress-linear>
        <router-view />
      </v-container>
    </v-content>

  </v-app>
</template>

<script>


import Toolbar from "./components/Toolbar";
import Navigation from "./components/Navigation";
export default {
  name: 'App',
  components: {
    Navigation,
    Toolbar
  },
  data () {
    return {
    }
  },
  created() {
    this.$store.state.loading = false;
  }
}
</script>
