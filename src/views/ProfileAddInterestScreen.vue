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
              <ul>
                <button class="btnInterest" 
                v-for="interest in interests" 
                :key="interest.id" 
                @click="onClickInterests($event)" 
                :value="interest.id">
                  {{ interest.label }}
                </button>
              </ul>
            </div>
          <button @click.prevent = "addProfileInterests()" class="btnNext">Next</button>
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
import { BackendApi } from '@/utils/http';
  
  
  export default  defineComponent({
    name: 'ProfileAddInterestScreen',
    mixins: [BackendMixin],
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    data() {
      return {
        interests: [],
        interestsId: [] as string[]
      }
    },
    created() {
      axios.get('https://127.0.0.1:8000/api/interests')
        .then(response => {
          this.interests = response.data;
          console.log("Interest get response : ", response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
    computed: {
      isAuthenticated() {
      return store.getters.isAuthenticated
      },
      backendName() {
      return store.getters.backendName
      },
      userId() {
          return store.getters.userId
      }
    },
    methods: {

      onClickInterests(e: MouseEvent){
          
        console.log("LA", this.interestsId);
        if (e && e.target && (e.target as HTMLInputElement).value) {
          this.interestsId.push((e.target as HTMLInputElement).value)
          console.log("nouveau tableau interest à envoyer", this.interestsId);
        }
      },

      async addProfileInterests(){
        const dataProfileInterests = {

          interest: this.interestsId,
        }
  
        try {
          new BackendApi('post', 'https://127.0.0.1:8000/api/profiles/interests').callApi(dataProfileInterests)

          await router.push({ name: 'ProfileAddPhotoScreen'})
        }
        catch (err) {
          console.log("ERROR ", err);
          this.addError(this.getErrorText(err))
        }
      }
    },

  });
  
  </script>
  