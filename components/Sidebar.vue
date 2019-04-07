<template>
    <div class="sidebar">
            <button class='close-sidebar-button'>◂</button>
            <b-form-select :value='null' :options="typeOptions" class='type-select'></b-form-select>

            <b-form inline class='sidebar-inline-form'>
                <b-form-select :value='1' :options="cities" class='cities-select'></b-form-select>

                <b-input-group>
                    <b-form-input placeholder= " 搜尋「裸賣」 " aria-label="Search"></b-form-input>

                    <b-input-group-append>
                        <b-button variant="outline-secondary" class="btn">
                            <img src="~/assets/img/icon_search.svg" height="19" width="19">
                        </b-button>
                    </b-input-group-append>
                </b-input-group>
            </b-form>

    <ul class="menu">
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>
        <ShopItem/>
    </ul>
    
    </div>
</template>

<style>
    .close-sidebar-button{
        z-index: 3;
        position: absolute;
        left: 100%;
        top: 50px;
        background-color: #ffffff;
        border: solid 1px #9FA0A0;
        border-left: none;
        color: red;
    }

    .btn{
        background-color: white;
        border-color: #ced4da;
        border-left: none;
    }
    .btn:hover{
        background-color: white;
        border-color: #ced4da;
        border-left: none;
    }

    .container-fluid {
        margin-top: 40px;
    }

    .sidebar {
        background-color: #D8E8DA;
        padding: 0;
        height: calc(100vh - 40px);
        transition: left 1s;
    }


    #sel2 {
        margin-right:20px;
    }

    .sidebar .type-select{
        border-radius: 0;
    }
    .sidebar .cities-select{
        width: 100px;
    }
    .sidebar select, .sidebar select:focus, .sidebar option{
        color: #44AD47;
        border-color: #ffffff;
    }

    ul{
        padding: 0;
    }

    .menu{
        height: calc(100vh - 135px);
        overflow: auto;
    }

    .sidebar-inline-form{
        padding: 20px 10px;
        flex-flow: row;
    }

    .sidebar-inline-form select{
        margin-right: 10px;
    }

    @media screen and (max-width:991px){
        .menu{
            display: none;
        }
        .sidebar {
            height: unset;
            padding: 10px;
        }
        .sidebar-inline-form {
            padding: 10px 0;
        }
    }
</style>

<script>
import ShopItem from '~/components/ShopItem.vue'

export default {
  components: {
    ShopItem
  },
  props:{
      typeOptions: {
          type: Array,
          default: []
      },
      cities: {
          type: Array,
          default: []
      }
  }
}
</script>