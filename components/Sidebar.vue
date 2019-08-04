<template>
    <div class='sidebar' :class="{'show-sidebar': show, 'is-right': isRight}" style="style" :id="id">
        <button class='close-sidebar-button' :class="{'showCloseSidebarButton': showCloseSidebarButton}" @click="onCloseButtonClick">◂</button>
        <div class='content'>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style>
    .sidebar.show-sidebar{
        transform: translateX(0);
    }

    .close-sidebar-button{
        z-index: 3;
        position: absolute;
        left: 100%;
        top: 50px;
        background-color: #ffffff;
        border: solid 1px #9FA0A0;
        border-left: none;
        color: red;
        display: none;
    }
    .showCloseSidebarButton{
        display: block;
    }

    .sidebar {
        width: 400px;
        background-color: #f3f4f5;
        padding: 0;
        position: fixed;
        top: 60px;
        left: 0;
        transform: translateX(-100%);
        z-index: 1;    
        transition: transform 0.5s;
    }

    .is-right {
        left: auto;
        right: 0;
        transform: translateX(100%);
    }

    .content{
        height: calc( 100vh - 60px);
        overflow-x: hidden;
        overflow-y: auto;
    }

    @media screen and (max-width:1250px){
        .sidebar {
            height: unset;
            padding: 10px;
        }
        .close-sidebar-button{
            display: none!important;
        }
    }
</style>

<script>

export default {
  props:{
    show: {
        type: Boolean,
        default: true
    },
    isRight: {
        type: Boolean,
        default: false
    },
    showCloseSidebarButton: {
        type: Boolean,
        default: false
    },
    onCloseButtonClick: {
        type: Function,
        default: ()=>{}
    },
    style: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        default: ''
    }
  }
}

</script>