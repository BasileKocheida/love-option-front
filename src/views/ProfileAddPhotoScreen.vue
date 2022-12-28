<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ProfileAddPhoto</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <section class="ProfileAddPhotoContent">
        <p>Add photos for your profile</p>
        <div class="sec-ProfileAddPhoto__cardContent">
          <ion-grid>
            <ion-row>
              <ion-col>
                <div class="sec-ProfileAddPhoto-cardContent__card">
                  <button>
                    <ion-icon :icon="add" />
                  </button>
                </div>
              </ion-col>
              <ion-col>
                <div class="sec-ProfileAddPhoto-cardContent__card">
                  <button>
                    <ion-icon :icon="add" />
                  </button>
                </div>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col>
                <div class="sec-ProfileAddPhoto-cardContent__card">
                  <button>
                    <ion-icon :icon="add" />
                  </button>
                </div>
              </ion-col>
              <ion-col>
                <div class="sec-ProfileAddPhoto-cardContent__card">
                  <button>
                    <ion-icon :icon="add" />
                  </button>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonIcon } from '@ionic/vue';
import { ellipse, square, add } from 'ionicons/icons';

export default defineComponent({
  name: 'HomeScreen',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow, IonIcon },
  setup() {
    return {
      add,
    }
  }
});
</script>
