<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>User informations</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content  :fullscreen="true" v-if="user">
        <section class="ProfileScreenContent">
          <div class="sec-profile__img">
            <!-- FAIRE UNE CONDITION POUR L'AFFICHAGE D'UNE IMG PAR DEFAUT ET POUR LES DERNIERES  -->
            <swiper :modules="modules" :keyboard="true" :pagination="true">
              <swiper-slide v-if="image1Url !== ''" >
                <ion-img class="imgProfile" v-bind:src="image1Url" alt="src"></ion-img>
              </swiper-slide>
              <swiper-slide v-else>
                <ion-img class="imgProfile" src="../../assets/images/user.jpg" alt="src"></ion-img>
              </swiper-slide>
              <swiper-slide v-if="image2Url !== ''">
                <ion-img class="imgProfile" v-bind:src="image2Url" alt="love-option.png"></ion-img>
              </swiper-slide>
              <swiper-slide v-if="image3Url !== ''">
                <ion-img class="imgProfile" v-bind:src="image3Url" alt="love-option.png"></ion-img>
              </swiper-slide>
              <swiper-slide v-if="image4Url !== ''">
                <ion-img class="imgProfile" v-bind:src="image4Url" alt="love-option.png"></ion-img>
              </swiper-slide>
            </swiper>
          </div>
          <div class="sec-profile__data">
            <div class="profileNameAge">
              <h5>{{user.profile.firstname}}</h5>
              <p>{{user.profile.age}}</p>
            </div>
            <div class="profileBio">
              <h5>Bio</h5>
              <p>{{user.profile.bio}}</p>
            </div>
            <h5>Interests</h5>
            <div class="profileInterests">
              <p v-for="interest in interests" :key="interest.id">{{ interest.label }}</p>
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
  import { BackendApi } from '@/utils/http';
  
  
  export default  defineComponent({
    name: 'ProfileScreen',
    mixins: [BackendMixin],
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonImg, Swiper, SwiperSlide},
    setup() {
      return {
        modules: [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides],
      };
    },
    data() {
      return {
        user: {},
        image1Url: '',
        image2Url: '',
        image3Url: '',
        image4Url: '',
        interests: [] as any[]
      };
    },
    created() {
      
      try {
        new BackendApi('GET', 'https://127.0.0.1:8000/api/me')
        .callApi(null, '', false)
        .then(async (response)=>{
          const user = response.data
          console.log("USER INFOS : ", user);
          this.interests = user.profile.interests
          this.user = user
          this.image1Url = user.profile.images[0].url
          this.image2Url = user.profile.images[1].url
          this.image3Url = user.profile.images[2].url
          this.image4Url = user.profile.images[3].url
        })
        
      }
      catch (err) {
        console.log("ERROR ", err);
        this.addError(this.getErrorText(err))
          
      }
    }
  });
  
  </script>
  