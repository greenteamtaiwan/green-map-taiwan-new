<template>
    <div class="large-img-viewer" >    
        <span @click="closeLargeImgViewer">✖</span>
        <carousel :perPage="1" :loop="true" style="marginTop: 5vh;" :navigateTo="[this.$store.state.largeImgIndex - 1, false]">
            <slide v-for="(src, index) in imgs" style="position: relative;width: 90vw;height: 80vh;">
                <img :src="src"/>
            </slide>
        </carousel>
        <div class="large-img-viewer-bg" @click="closeLargeImgViewer"/>
    </div>
</template>

<style scoped>
    .large-img-viewer{
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        position: fixed;
        z-index: 5;
        top: 0;
    }
    
    span{
        right: 10px;
        color: white;
        position: fixed;
        top: 5px;
        font-size: 36px;
        cursor: pointer;
    }

    img{
        max-width: 90vw;
        max-height: 80vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .large-img-viewer-bg{
        background-color: rgba(0,0,0,0.7);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    @media screen and (max-width:1250px){

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
  computed: {
      imgs: function(){
          let imgs = [];          
          for(let i=1;i<=6;i++){
            if(this.$store.state.shop[`photo${i}`]) imgs.push(this.$store.state.shop[`photo${i}`]);
          }
          return imgs;
      }
  },
  methods: {
      closeLargeImgViewer (){
          this.$store.commit("setLargeImgIndex", null);
      }
  }
}

</script>