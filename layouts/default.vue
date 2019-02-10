<template>
  <v-app>
    <v-navigation-drawer fixed clipped v-model="drawer" app>
      <v-list dense>
        <v-list-tile
          v-for="item in items"
          :key="item.text"
          @click="item.checked = !item.checked"
          v-bind:class="{'light-blue': item.checked}"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="teal accent-3" dense fixed clipped-left app dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Green Map</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <nuxt/>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vuetify.js',
      drawer: true,
      items: [
        { icon: 'trending_up', type: 'fix', text: '修理站', checked: true },
        {
          icon: 'subscriptions',
          type: 'drink',
          text: '飲水機',
          checked: false
        },
        { icon: 'history', type: 'hand', text: '二手商店', checked: false }
      ]
    }
  },
  methods: {
    doNothing: function() {}
  }
}
</script>

<style>
</style>
