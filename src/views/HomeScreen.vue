<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <section class="HomeContent">
        <div class="sec-home__cardContent">
          <ion-grid>
            <ion-row>
              <ion-col>
                <div class="sec-home-cardContent__card">
                  <ion-icon name="heart-circle-outline"></ion-icon>
                  <p>Match of the day</p>
                </div>
              </ion-col>
              <ion-col>
                <div class="sec-home-cardContent__card">
                  <ion-icon :icon="triangle" />
                  <p>Matches list</p>
                </div>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <div class="sec-home-cardContent__card">
                  <ion-icon name="create-outline"></ion-icon>
                  <p>Create new quizz</p>
                </div>
              </ion-col>
              <ion-col>
                <div class="sec-home-cardContent__card">
                  <ion-icon name="settings-outline"></ion-icon>
                  <p>Account settings</p>
                </div>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonIcon, IonCol } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default defineComponent({
  name: 'HomeScreen',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow, IonIcon, IonCol },
  setup() {
    return {
      triangle,
    }
  }
});
</script>
