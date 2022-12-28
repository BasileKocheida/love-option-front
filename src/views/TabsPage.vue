<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="HomeScreen" href="/tabs/HomeScreen">
          <ion-icon :icon="triangle" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="LoginScreen" href="/tabs/LoginScreen">
          <ion-icon :icon="ellipse" />
          <ion-label>Login</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="RegisterScreen" href="/tabs/RegisterScreen">
          <ion-icon :icon="square" />
          <ion-label>Register</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="ProfileAddInfoScreen" href="/tabs/ProfileAddInfoScreen">
          <ion-icon :icon="square" />
          <ion-label>Profile infos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="ProfileAddInterestScreen" href="/tabs/ProfileAddInterestScreen">
          <ion-icon :icon="ellipse" />
          <ion-label>Profile interests</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="ProfileAddPhotoScreen" href="/tabs/ProfileAddPhotoScreen">
          <ion-icon :icon="ellipse" />
          <ion-label>Profile photos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="ProfileScreen" href="/tabs/ProfileScreen">
          <ion-icon :icon="ellipse" />
          <ion-label>Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
});
</script>
