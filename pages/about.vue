<template>
  <div class="about-container">
    <Navbar/>
    <IndexFilterTab 
      :hasMapButton="false" 
      :hasQuery="false" 
      :showAllType="false" 
      :typesContainerClass="'about-types-container'"
      :onTypeClick="setType"
      :checkIfIsSelected="checkIfIsSelected"
    />
    <div class="type-info">
      <div class="type-info-top">
        <h3>什麼是{{typeOptions[type].infoText}}</h3>
        <p>{{typeOptions[type].description}}</p>
      </div>
      <div class="type-info-img">
        <img :src="typeOptions[type].typeIcon"/>
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
  }

  .type-info-top{
    padding: 20px 100px;
    text-align: center;
  }
  .type-info-top h3{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  .type-info-top p{
    text-align: left;
    white-space: pre-line;
  }
  .type-info-img{
    /*height: 500px;*/
  }
  .type-info-img img{
    width: 400px;
    margin: auto;
    display: block;
  }

  @media screen and (max-width:1250px){
    .about-container{
      padding-top: 116px;
    }
  }
</style>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import IndexFilterTab from '~/components/IndexFilterTab.vue';
import ImageHandler from '~/components/ImageHandler.vue';

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
