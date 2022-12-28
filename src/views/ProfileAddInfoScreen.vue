<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Add your informations</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <section class="ProfileAddInfoScreenContent">
        <div class="sec-profileInfo__img">
          <ion-img src="../../assets/Love_Option.png" alt="love-option.png"></ion-img>
        </div>
        <div class="sec-profileInfo__inputs">
          <p>Please complete your profile to start</p>
          <ion-item class="ProfileAddInfoScreenInput custom">
            <ion-label>Lastname</ion-label>
            <ion-input class="custom" placeholder="Lastname" v-model="lastname"></ion-input>
          </ion-item>
          <ion-item class="ProfileAddInfoScreenInput custom">
            <ion-label>Firstname</ion-label>
            <ion-input class="custom" placeholder="Firstname" v-model="firstname"></ion-input>
          </ion-item>
          <ion-item class="ProfileAddInfoScreenInput custom" >
            <ion-label>Age</ion-label>
            <ion-input class="custom" placeholder="Age" v-model="age"></ion-input>
          </ion-item>
          <ion-item class="ProfileAddInfoScreenInput custom">
            <ion-label>Gender</ion-label>
            <ion-input class="custom" placeholder="Gender" v-model="gender"></ion-input>
          </ion-item>
          <ion-item class="ProfileAddInfoScreenInput custom">
            <ion-label>Phone</ion-label>
            <ion-input class="custom" placeholder="Phone" v-model="phone"></ion-input>
          </ion-item>
          <ion-item class="ProfileAddInfoScreenInput custom">
            <ion-label>Bio</ion-label>
            <ion-input class="custom" placeholder="Bio" v-model="bio"></ion-input>
            <ion-input class="custom" v-model="userId"></ion-input>
          </ion-item>
          <button @click.prevent = "addProfileInfo()" class="btnNext">Next</button>
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
  name: 'ProfileAddInfoScreen',
  mixins: [BackendMixin],
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonItem, IonImg, IonLabel },
  data(){
    return {
      lastname:"",
      firstname:"",
      age:"",
      gender:"",
      phone:"",
      bio:"",
    }
  },
  computed: {
    username() {
        return store.getters.userName
    },
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
    async addProfileInfo(){
      const dataProfileInfo = {
        lastname: this.lastname,
        firstname: this.firstname,
        age: this.age,
        gender: this.gender,
        phone: this.phone,
        bio: this.bio,
        user: this.userId
      };
      try {
          await axios.post("https://127.0.0.1:8000/api/profiles", dataProfileInfo);
          console.log("ppl");
          await router.push({ name: 'ProfileAddInterestScreen'})
      }
      catch (err) {
        console.log("ERROR ", err);
        this.addError(this.getErrorText(err))
          
      }
   }
}
});

</script>
