<template>
    <div>
        <v-navigation-drawer app clipped>
          <v-list>
            <v-list-tile
                    v-for="item in menu"
                    @click=""
                    :to="{name: item.name }"
                    :key="item.title">
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      menu: [
          {icon: 'dashboard', title: 'Accounts', name: 'home'},
          {icon: 'people', title: 'Groups', name: 'groups'},
          {icon: 'settings', title: 'Settings', name: 'settings'}
      ]
    }
  }
}
</script>