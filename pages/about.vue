<template>
  <div class="about-container" >
    <Navbar :setTypeProps="this.$mq==='lg'?null:this.setType"/>
    <div id="typeInfo">
      <mq-layout mq="lg" class="img">
        <IndexFilterTab 
          :hasMapButton="false" 
          :hasQuery="false" 
          :showAllType="false" 
          :typesContainerClass="'about-types-container'"
          :onTypeClick="setType"
          :checkIfIsSelected="checkIfIsSelected"
        />
      </mq-layout>
      <div class="type-info">
        <div class="type-info-text">
          <h3>什麼是{{typeOptions[type].infoText}}</h3>
          <p>{{typeOptions[type].description}}</p>
        </div>
        <div class="type-info-img">
          <img :src="typeOptions[type].typeImg"/>
        </div>
      </div>
    </div>
    <Footer :containerClass="'about-footer-container'" :sectionClass="'about-footer-section'"/>
  </div>
</template>

<style>
  .about-container{
    padding-top: 60px;
    background-color: #f3f4f5;
  }

  .about-footer-container{
    background-color: #f3f4f5;

  }

  .about-footer-section{
    background-color: #fff;
    margin-left: 40px;
    margin-right: 40px;
  }

  .about-types-container{
    margin: 10px auto;
  }

  .type-info{
    background-color: #fff;
    margin: 20px 50px 10px;
    display: flex;
    flex-direction: row;
  }

  .type-info-text{
    padding: 50px 30px 20px;
    text-align: center;
  }
  .type-info-text h3{
    font-size: 32px;
    margin-bottom: 40px;
  }
  .type-info-text p{
    text-align: left;
    white-space: pre-line;
  }
  .type-info-img{
    /*height: 500px;*/
  }
  .type-info-img img{
    height: 100%;
    margin: auto;
    display: block;
  }

  @media screen and (max-width:1366px){
    .type-info-text{
      padding: 25px 20px 5px;
    }
    .type-info-text h3{
      margin-bottom: 15px;
    }
  }
  
  @media screen and (max-width:1250px){
    .about-container{
      padding-top: 116px;
    }
    .type-info{
      flex-direction: column;
    }
    .type-info-text{
      padding: 50px 30px 20px;
    }
    .type-info-img{
      width: 100%;
    }
    .type-info-img img{
      width: 100%;
    }
  }
</style>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import IndexFilterTab from '~/components/IndexFilterTab.vue';
import ImageHandler from '~/components/ImageHandler.vue';

import throttle from '~/functions/throttle.js';

export default {
  components: {
    Navbar,
    Footer,
    IndexFilterTab,
    ImageHandler
  },
  data() {
    return {
      type: 1
    }
  },
  computed: {
      typeOptions: function () {
          return this.$store.state.sourceData.types.filter(option=>(option.checked));
      }
  },
  methods: {
    setType(type){
      this.type = type;
    },
    checkIfIsSelected(item){
      return item.value === this.type;
    }
  }
}
</script>
