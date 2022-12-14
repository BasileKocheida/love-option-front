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
          <ion-item class="registerScreenInput" style="background-color: black;">
            <ion-label>Email</ion-label>
            <ion-input class="registerput" placeholder="Email"></ion-input>
          </ion-item>
          <ion-item class="registerScreenInput">
            <ion-label>Password</ion-label>
            <ion-input placeholder="Password"></ion-input>
          </ion-item>
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

export default  defineComponent({
  name: 'RegisterScreen',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonItem, IonImg, IonLabel }
});

</script>
