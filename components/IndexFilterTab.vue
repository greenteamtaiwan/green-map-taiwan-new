<template>
    <div class="index-filter-tab">
        <span v-if="hasQuery">{{query||"零廢棄地圖綠點"}}</span>
        <ul :class="typesContainerClass">
            <li v-for="(item, index) in typeOptions" 
                @click="setType(item.value)" tabindex="0" 
                :class="[item.class , checkIfIsSelected(item)?'selected-type':'']"
            >
                <img :src="item.typeIcon"/>
                {{ item.text }}
            </li>
        </ul>
        <nuxt-link to="/map" v-if="hasMapButton"><button><img src='../assets/img/GT_logo_no_text.svg' width="40px"/></button></nuxt-link>
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
        width: 10.5%;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

        
    .index-filter-tab li{
        width: 16%;
        text-align: left;
        background-color: white;
        padding: 5px 0;
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

    .index-filter-tab button:hover{
        background-color: #2586db;
    }

    .index-filter-tab .selected-type.type_all, .index-filter-tab .type_all:hover{
        color: white;
        background-color: #2586db;
    }
    .index-filter-tab .selected-type.type_vegetarian_shop, .index-filter-tab .type_vegetarian_shop:hover{
        color: white;
        background-color: #22bf5d;
    }
    .index-filter-tab .selected-type.type_thrift_shop, .index-filter-tab .type_thrift_shop:hover{
        color: white;
        background-color: #2586db;
    }
    .index-filter-tab .selected-type.type_free_shop, .index-filter-tab .type_free_shop:hover{
        color: white;
        background-color: #f399cc;
    }
    .index-filter-tab .selected-type.type_food_share, .index-filter-tab .type_food_share:hover{
        color: white;
        background-color: #1db9be;
    }
    .index-filter-tab .selected-type.type_food_bank, .index-filter-tab .type_food_bank:hover{
        color: white;
        background-color: #f9892f;
    }

    .index-filter-tab ul{
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        width: 83.5%;
        margin-bottom: 0;
    }

    .index-filter-tab img{
        width: 37px;
    }

    @media screen and (max-width:1250px){

    }
</style>

<script>
import throttle from '~/functions/throttle.js';

export default {
    computed: {
        typeOptions: function () {
            return this.$store.state.sourceData.types.filter(option=>(option.checked));
        },
        query: function() {
            return this.$store.state.query;
        },
        type: function() {
            return this.$store.state.type;
        }
    },
    props:{
        hasMapButton: {
            type: Boolean,
            default: true
        },
        hasQuery: {
            type: Boolean,
            default: true
        },
        typesContainerClass: {
            type: String,
            default: ""
        }
    },
    methods:{
        checkIfIsSelected (item) {
            if(!item.value) return this.type.filter(data=>data).length === 0;
            else return this.type[item.value];
        },
        setType: throttle(function(type){
            this.$store.commit("setType", type);
            this.$store.dispatch("getShops");
        }, 500, { trailing: false })
    }
}
</script>