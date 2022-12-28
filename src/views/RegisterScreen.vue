<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <section class="RegisterScreenContent">
        <div class="sec-register__img">
          <ion-img src="../../assets/Love_Option.png" alt="love-option.png"></ion-img>
        </div>
        <div class="sec-register__inputs">
          <p>Create an account !</p>
          <ion-item class="registerScreenInput custom">
            <ion-label>Email</ion-label>
            <ion-input class="custom" placeholder="Email" v-model="email"></ion-input>
          </ion-item>
          <ion-item class="registerScreenInput custom">
            <ion-label>Password</ion-label>
            <ion-input class="custom" placeholder="Password" v-model="password"></ion-input>
          </ion-item>
          <button @click.prevent = "register()" class="btnNext">Sign up</button>
          <div class="sec-register__href">
            <a href="">Already sign up ?</a>
          </div>
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
  name: 'RegisterScreen',
  mixins: [BackendMixin],
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonItem, IonImg, IonLabel },
  data(){
    return {
      email:"",
      password:""
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
    async register(){
      const dataRegister = {
          email: this.email,
          plainPassword: this.password
      };
      try {
          await axios.post("https://127.0.0.1:8000/api/users", dataRegister);
          this.login(this.email, this.password);
          await router.push({ name: 'HomeScreen'})
      }
      catch (err) {
          this.addError(this.getErrorText(err))
      }
   }
}
});

</script>
