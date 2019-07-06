<template>
    <div class="large-img-viewer" @click="closeLargeImgViewer">
        <img :src="src"/>
    </div>
</template>

<style scoped>
    .large-img-viewer{
        background-color: rgba(0,0,0,0.7);
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        position: fixed;
        z-index: 5;
        top: 0;
    }

    img{
        max-width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    @media screen and (max-width:991px){

    }
</style>

<script>

export default {
  props:{
    src: {
        type: String,
        default: ''
    }
  },
  methods: {
      closeLargeImgViewer (){
          this.$store.commit("setLargeImg", "");
      }
  }
}

</script>