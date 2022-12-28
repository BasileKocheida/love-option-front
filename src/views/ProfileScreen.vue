<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Add your informations</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <section class="ProfileScreenContent">
          <div class="sec-profile__img">
            <swiper :modules="modules" :keyboard="true" :pagination="true"  >
              <swiper-slide>
                <ion-img class="imgProfile" src="../../assets/images/user.jpg" alt="love-option.png"></ion-img>
              </swiper-slide>
              <swiper-slide>
                <ion-img class="imgProfile" src="../../assets/Love_Option.png" alt="love-option.png"></ion-img>
              </swiper-slide>
              <swiper-slide>
                <ion-img class="imgProfile" src="../../assets/Love_Option.png" alt="love-option.png"></ion-img>
              </swiper-slide>
            </swiper>
          </div>
          <div class="sec-profile__data">
            <div class="profileNameAge">
              <h5>Lola</h5>
              <p>24</p>
            </div>
            <div class="profileBio">
              <h5>Bio</h5>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, laborum.</p>
            </div>
            <h5>Interests</h5>
            <div class="profileInterests">
              <p>Dancing</p>
              <p>Movies</p>
              <p>Sports</p>
              <p>Art</p>
            </div>
          </div>
        </section>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent} from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonImg, IonicSlides } from '@ionic/vue';
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';
  import 'swiper/css/zoom';
  import '@ionic/vue/css/ionic-swiper.css';
  import axios from 'axios';
  import store from '@/store';
  import {BackendMixin} from '../mixins/backend';
  import router from '@/router';
  
  
  export default  defineComponent({
    name: 'ProfileScreen',
    // mixins: [BackendMixin],
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonImg, Swiper, SwiperSlide},
    setup() {
      return {
        modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides],
      };
    },
  });
  
  </script>
  