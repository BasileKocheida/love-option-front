<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <section class="loginScreenContent">
        <div class="sec-login__img">
          <ion-img src="../../assets/Love_Option.png" alt="love-option.png"></ion-img>
        </div>
        <div class="sec-login__inputs">
          <p>Let's sign in !</p>
          <ion-item class="loginScreenInput custom">
            <ion-label>Email</ion-label>
            <ion-input class="loginput" placeholder="Email" v-model="email"></ion-input>
          </ion-item>
          <ion-item class="loginScreenInput custom">
            <ion-label>Password</ion-label>
            <ion-input placeholder="Password" v-model="password"></ion-input>
          </ion-item>
          <button @click.prevent = "logIn()" class="btnNext">Sign in</button>
          <div class="sec-login__href">
            <a href="">Haven't account ?</a>
          </div>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonImg } from '@ionic/vue';
import {BackendMixin} from '../mixins/backend';
import router from '../router';
import store from '../store';

export default  defineComponent({
  name: 'LoginScreen',
  mixins: [BackendMixin],
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonItem, IonImg, IonLabel },
  data(){
    return{
      email: "",
      password: ""
    }
  },
  
  methods: {
    //function in mixins => backends
    async logIn() {
        try {
            this.login(this.email, this.password)
            console.log("redirect");
            await router.push({ name: 'HomeScreen'})
        }
        catch (err) {
            this.addError(this.getErrorText(err))
        }
    }
  }
});



</script>
