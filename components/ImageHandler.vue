<template>
    <div :style="computedContainerStyle" @click="clickImg">
        <img v-if="finalSrc" :src="finalSrc" :style="style" :alt="alt"/>
        <span v-else style="display:inline-block;margin:20px;">Loading...</span>
    </div>
</template>

<style scoped>
    div{
        position: relative;
        background-size: cover;
        background-position: 50% 50%;
    }
    img{
        /*position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);*/
        width: 0;
        height: 0;
    }
</style>

<script>
import GT1 from '~/assets/img/GT1.png';
import GT2 from '~/assets/img/GT2.png';
import GT3 from '~/assets/img/GT3.png';
import GT4 from '~/assets/img/GT4.png';
import GT5 from '~/assets/img/GT5.png';
import GT6 from '~/assets/img/GT6.png';

export default {
    data() {
        return {
            placeholders: [
                GT1,
                GT2,
                GT3,
                GT4,
                GT5,
                GT6
            ],
            finalSrc: null,
            style: {}
        };
    },
    props:{
      src: {
          type: String,
          default: ''
      },
      alt: {
          type: String,
          default: ''
      },
      containerStyle: {
          type: Object,
          default: () => ({width: '100%',height: '100%',overflow: 'hidden'})
      },
      onClick: {
          type: Function,
          default: ()=>{}
      },
      altPlaceholders: {
          type: Array,
          default: []
      }
    },
    computed: {
        computedContainerStyle: function() {
            let containerStyle = {...this.containerStyle};
            if(this.finalSrc) containerStyle.backgroundImage = `url('${this.finalSrc}')`;
            if(this.onClick) containerStyle.cursor = 'pointer';

            return containerStyle;
        }
    },
    mounted() {
        this.checkImage();
    },
    watch: {
        src (newVal, oldVal){
            if(newVal !== oldVal) this.checkImage();
        }
    },
    methods: {
        checkImage () {
            const img = new Image();
            const that = this;

            img.onload = function(){
                that.finalSrc = that.src;
                if(this.width > this.height){
                    that.style = {width: '100%'};
                }else{
                    that.style = {width: '100%'};
                }
            }
            img.onerror = function(){
                let placeholders = that.altPlaceholders && that.altPlaceholders.length > 0?that.altPlaceholders:that.placeholders;
                that.finalSrc = placeholders[Math.floor(Math.random()*placeholders.length)];
                that.style = {height: '100%'};
            }
            img.src = this.src;

        },
        clickImg () {
            this.onClick(this.finalSrc);
        }
    }
}
</script>