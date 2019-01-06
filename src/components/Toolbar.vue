<template>
    <div>
        <v-toolbar app color="blue" flat fixed clipped-left class="snt-toolbar--main">
          <v-toolbar-title class="white--text">
            <span>SNT Engagement</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon class="white--text">
            <v-icon>notifications</v-icon>
          </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
export default {
  name: 'toolbar',
  data() {
    return {

    }
  }
}
</script>

<style>
.snt-toolbar--main {
  background: linear-gradient(to right, #24305E, #374785);
}
</style>