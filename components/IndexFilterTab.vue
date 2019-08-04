<template>
    <div class="index-filter-tab">
        <span>{{query||"零廢棄地圖綠點"}}</span>
        <ul>
            <li v-for="(item, index) in typeOptions" @click="setType(item.value)" :class="{'selected-type': checkIfIsSelected(item)}">
                <img :src="item.icon"/>
                {{ item.text }}
            </li>
        </ul>
        <nuxt-link to="/map" v-if="hasMapButton"><button><img src='../assets/img/icon_map.svg' width="40px"/></button></nuxt-link>
    </div>  
</template>

<style scoped>
    .index-filter-tab{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .index-filter-tab span{
        display: inline-block;
        width: calc(calc(100% - 150px) * 0.2);
        font-weight: bold;
    }

        
    .index-filter-tab li{
        width: 19%;
        text-align: left;
        background-color: white;
        padding: 5px;
        cursor: pointer;
    }

    .index-filter-tab a{
        width: 60px;
        text-align: center;
        align-self: stretch;
    }

    .index-filter-tab a button{
        background-color: white;
        padding: 5px;
        border: none;
        width: 100%;
        height: 100%;
    }

    .index-filter-tab .selected-type, .index-filter-tab li:hover, .index-filter-tab button:hover{
        color: white;
        background-color: #2586db;
    }

    .index-filter-tab ul{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        width: calc(calc(100% - 60px) * 0.8);
        margin-bottom: 0;
    }

    .index-filter-tab img{
        width: 40px;
    }

    @media screen and (max-width:991px){

    }
</style>

<script>
export default {
    computed: {
        types: function (){
            return this.$store.state.sourceData.types;
        },
        altPlaceholders: function(){
            return [
                GT1,
                GT2,
                GT3,
                GT4,
                GT5
            ];
        }
    },
    computed: {
        typeOptions: function () {
        return this.$store.state.sourceData.types.filter(option=>(option.checked)).slice(1);
        },
        query: function() {
        return this.$store.state.query
        }
    },
    props:{
        hasMapButton: {
            type: Boolean,
            default: true
        }
    },
    methods:{
        checkIfIsSelected (item) {
        return +this.$store.state.type === +item.value;
        },
        setType (type){
        if(type === this.$store.state.type){
            this.$store.commit("setType", null);
        }else{
            this.$store.commit("setType", type);
        }
        this.$store.dispatch("getShops");
        }
    }
}
</script>