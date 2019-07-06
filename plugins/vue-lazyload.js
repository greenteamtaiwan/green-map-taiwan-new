import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import GT1 from '~/assets/img/GT1.png';
import GT2 from '~/assets/img/GT2.png';
import GT3 from '~/assets/img/GT3.png';
import GT4 from '~/assets/img/GT4.png';
import GT5 from '~/assets/img/GT5.png';
import GT6 from '~/assets/img/GT6.png';

Vue.use(VueLazyLoad,{
    error: GT1,
   loading: GT2
})