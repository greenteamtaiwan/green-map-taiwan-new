<template>
  <div>
    <Navbar></Navbar>
    <v-container>
      <no-ssr>
        <gmap-map
          :center="center"
          :zoom="zoomLevel"
          map-type-id="roadmap"
          style="width: 100%; height: 600px"
        >
          <gmap-marker
            :key="index"
            v-for="(node, index) in nodes"
            v-show="visiableItemArray.includes(node.type)"
            :position="{lat: node.latitude, lng: node.longitude}"
            :clickable="true"
            :draggable="false"
          />
          <gmap-info-window
            :options="infoWindow.options"
            :position="infoWindow.positions"
            :opened="infoWindow.isOpen"
            @closeclick="infoWindow.isOpen=false"
          >
            <h1>{{infoWindow.node.name}}</h1>
            <v-btn @click="showModal = !showModal">詳細</v-btn>
            <v-dialog width="500" v-model="showModal">
              <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                  <div>
                    <div class="headline">{{infoWindow.node.name}}</div>
                  </div>
                </v-card-title>

                <v-card-text v-show="infoWindow.node.address">地址: {{infoWindow.node.address}}</v-card-text>
                <v-card-text v-show="infoWindow.node.phone">電話: {{infoWindow.node.phone}}</v-card-text>
                <v-card-text v-show="infoWindow.node.url">
                  <a :href="infoWindow.node.url" target="_blank">網站</a>
                </v-card-text>
                <v-card-text
                  v-show="infoWindow.node.business_time"
                >營業時間: {{infoWindow.node.business_time}}</v-card-text>
                <v-card-text v-show="infoWindow.node.remark">備註: {{infoWindow.node.remark}}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <!-- <v-btn flat color="blue">前往</v-btn> -->
                </v-card-actions>
                <v-divider></v-divider>
              </v-card>
            </v-dialog>
          </gmap-info-window>
        </gmap-map>
      </no-ssr>
    </v-container>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import * as firebase from 'firebase'
import { defaultCoreCipherList } from 'constants'
import Navbar from '~/components/Navbar.vue'

const config = {
  apiKey: 'AIzaSyA5siB2Jg64LhQNlieawQ69kOL78X5Kov8',
  authDomain: 'greenmaptaiwan.firebaseapp.com',
  databaseURL: 'https://greenmaptaiwan.firebaseio.com',
  projectId: 'greenmaptaiwan',
  storageBucket: 'greenmaptaiwan.appspot.com',
  messagingSenderId: '395267289672'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default {
  components: {
    Logo,
    VuetifyLogo,
    Navbar
  },
  data() {
    return {
      infoWindow: {
        options: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
        positions: { lat: 23.41322, lng: 121.219482 },
        isOpen: false,
        node: {}
      },
      showModal: false,
      infowindowOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      dialog: true,
      show: false,
      center: { lat: 23.41322, lng: 121.219482 },
      zoomLevel: 9,
      markerOptions: {
        opacity: 0.5
      },
      rawNodes: [],
      // for header
      drawer: true,
      items: [
        {
          icon: 'fastfood',
          type: 'food_share',
          text: '食物分享櫃',
          checked: true
        },
        {
          icon: 'shop',
          type: 'free_shop',
          text: '免費商店',
          checked: false
        },
        {
          icon: 'history',
          type: 'thrift_shop',
          text: '二手商店',
          checked: false
        },
        {
          icon: 'face',
          type: 'vegetarian_shop',
          text: '素食店',
          checked: false
        }
      ]
    }
  },
  computed: {
    visiableItemArray: function() {
      let map = []
      for (let index in this.items) {
        let item = this.items[index]
        if (item.checked) {
          map.push(item.type)
        }
      }
      return map
    },
    nodes: function() {
      let nodes = []
      for (let index in this.rawNodes) {
        let rawNode = this.rawNodes[index]
        if (this.visiableItemArray.includes(rawNode.type)) {
          nodes.push(rawNode)
        }
      }

      return nodes
    }
  },
  mounted: function() {
    firebase
      .database()
      .ref('nodes')
      .once('value')
      .then(snapshot => {
        this.rawNodes = snapshot.val()
      })
  },
  methods: {
    mapClick: function(event) {
      console.log(this.$refs.myMap.mapObject._zoom)
      if (this.$refs.myMap.mapObject._zoom < 15) {
        alert('需要再縮小')
      }
    },
    markerClick: function(node) {
      this.center = { lat: node.latitude, lng: node.longitude }
      this.infoWindow = {
        options: this.infowindowOptions,
        positions: { lat: node.latitude, lng: node.longitude },
        isOpen: true,
        node: node
      }
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
