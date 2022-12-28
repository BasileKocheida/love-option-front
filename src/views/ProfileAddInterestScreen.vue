<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Choose yours interests in the liste</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <section class="ProfileAddInterestScreenContent">
            <p>Please complete your profile to start</p>
            <div class="sec-profileInterest__btn">
                <button class="btnInterest">Test</button>
                <button class="btnInterest">Test</button>
                <button class="btnInterest">Test</button>
                <button class="btnInterest">Test</button>
                <button class="btnInterest">Test</button>
                <button class="btnInterest">Test</button>
                <button class="btnInterest">Test</button>
                <button class="btnInterest">Test</button>
                <button class="btnInterest">Test</button>
                <button class="btnInterest">Test</button>
                <button class="btnInterest">Test</button>
            </div>
        </section>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent} from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonImg } from '@ionic/vue';
  import axios from 'axios';
  import store from '@/store';
  import {BackendMixin} from '../mixins/backend';
  import router from '@/router';
  
  
  export default  defineComponent({
    name: 'ProfileAddInterestScreen',
    // mixins: [BackendMixin],
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    
    }
  );
  
  </script>
  