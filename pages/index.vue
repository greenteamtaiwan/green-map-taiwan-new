<template>
  <v-container>
    <h3>map</h3>
    <l-map ref="myMap" :zoom="zoomLevel" :center="center" @click="mapClick" style="z-index: 1;">
      <l-tilelayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tilelayer>

      <template>
        <l-marker
          :options="markerOptions"
          :lat-lng="[23.413220, 121.219482]"
          @mouseover="markerOver"
          @mouseout="markerOut"
          @click="markerClick"
        >
          <l-popup>
            <h1>修理站</h1>
            <v-btn @click="show = !show">詳細</v-btn>
            <v-dialog width="500" v-model="show">
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                  <div>
                    <div class="headline">修理站</div>
                  </div>
                </v-card-title>

                <v-card-text>106台北市大安區敦化南路二段</v-card-text>
                <v-card-actions>
                  <v-btn flat color="blue">前往</v-btn>
                </v-card-actions>
                <v-divider></v-divider>
              </v-card>
            </v-dialog>
          </l-popup>
        </l-marker>
      </template>
    </l-map>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      dialog: true,
      show: false,
      center: [23.41322, 121.219482],
      zoomLevel: 9,
      markerOptions: {
        opacity: 0.5
      }
    }
  },
  methods: {
    showModal: function() {
      this.show = true
    },
    mapClick: function(event) {
      console.log(this.$refs.myMap.mapObject._zoom)
      if (this.$refs.myMap.mapObject._zoom < 15) {
        alert('需要再縮小')
      }
    },
    markerClick: function(event) {
      this.center = [event.latlng.lat, event.latlng.lng]
    },
    markerOver: function(event) {
      event.sourceTarget.setOpacity(1.0)
    },
    markerOut: function(event) {
      event.sourceTarget.setOpacity(0.5)
    }
  }
}
</script>
