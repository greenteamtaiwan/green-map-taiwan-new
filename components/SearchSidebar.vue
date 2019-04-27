<template>
    <Sidebar :show="show">
        <div slot="content">
            
            <ul>
                <hr/>   
                <li v-for="(item, index) in typeOptions">
                    <img :src="item.icon"/>
                    {{ item.text }}
                </li>
                <hr/>
            </ul>
        </div>
    </Sidebar>
</template>

<style scoped>
    img{
        width: 50px;
        margin: 5px 10px;
    }
</style>

<script>
import ShopItem from '~/components/ShopItem.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
    components: {
        ShopItem,
        Sidebar
    },
    props:{
      typeOptions: {
          type: Array,
          default: []
      },
      show: {
          type: Boolean,
          default: false
      }
    }
}
</script>