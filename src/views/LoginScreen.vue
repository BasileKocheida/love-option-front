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
          <ion-item class="loginScreenInput" style="background-color: black;">
            <ion-label>Email</ion-label>
            <ion-input class="loginput" placeholder="Email"></ion-input>
          </ion-item>
          <ion-item class="loginScreenInput">
            <ion-label>Password</ion-label>
            <ion-input placeholder="Password"></ion-input>
          </ion-item>
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

export default  defineComponent({
  name: 'LoginScreen',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonInput, IonItem, IonImg, IonLabel }
});

</script>
