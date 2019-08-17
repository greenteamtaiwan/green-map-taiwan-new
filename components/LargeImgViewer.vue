<template>
    <div class="large-img-viewer" >    
        <button @click="closeLargeImgViewer" class="large-img-viewer-close-button">✖</button>
        <carousel :perPage="1" :loop="true" style="margin: 5vh auto 0; width: 85vw; color: white;" :navigateTo="[this.$store.state.largeImgIndex - 1, false]" :navigationEnabled="true"
            :navigationNextLabel="`》`"
            :navigationPrevLabel="`《`"
        >
            <slide v-for="(src, index) in imgs" style="position: relative;width: 90vw;height: 80vh;">
                <img :src="src"/>
            </slide>
        </carousel>
        <div class="large-img-viewer-bg" @click="closeLargeImgViewer"/>
    </div>
</template>

<style>
    .VueCarousel-navigation-button{
        color: white!important;
        font-size: 30px;
        width: 7vw;
        height: 100%;
    }
</style>
<style scoped>
    .large-img-viewer{
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        position: fixed;
        z-index: 5;
        top: 0;
    }
    
    .large-img-viewer-close-button{
        right: 20px;
        color: white;
        position: fixed;
        top: 5px;
        font-size: 36px;
        cursor: pointer;
        background-color: rgba(0,0,0,0);
        border: none;
        height: 5vh;
        line-height: 5vh;
    }

    img{
        max-width: 80vw;
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
        .large-img-viewer-close-button{
            right: 10px;
        }
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