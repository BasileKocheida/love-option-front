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
          <form enctype="multipart/form-data">
          <ion-grid>
              <ion-row>
                <ion-col>
                  <div class="sec-ProfileAddPhoto-cardContent__card">
                    <input type="file" @change="onClickImage1"/>
                  </div>
                </ion-col>
                <ion-col>
                  <div class="sec-ProfileAddPhoto-cardContent__card">
                    <input type="file" @change="onClickImage2"/>
                  </div>
                </ion-col>
              </ion-row>
              <ion-row>
                <ion-col>
                  <div class="sec-ProfileAddPhoto-cardContent__card">
                    <input type="file" @change="onClickImage3"/>
                  </div>
                </ion-col>
                <ion-col>
                  <div class="sec-ProfileAddPhoto-cardContent__card">
                    <input type="file" @change="onClickImage4"/>
                  </div>
                </ion-col>
              </ion-row>
            </ion-grid>
            <button @click.prevent = "addProfilePhotos($event)" class="btnNext">Next</button>
          </form>
        </div>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import { ellipse, square, add } from 'ionicons/icons';
import { BackendMixin } from '@/mixins/backend';
import axios from 'axios';
import store from '@/store';
import { BackendApi } from '@/utils/http';
import router from '@/router';

export default defineComponent({
  name: 'ProfileAddPhotoScreen',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow, IonCol },
  mixins: [BackendMixin],
  data() {
    return {
      image1: {},
      image2: {},
      image3: {},
      image4: {},
      images: [] as any[]
    }
  },
  created() {
    // axios.get('https://127.0.0.1:8000/api/interests')
    //   .then(response => {
    //     this.interests = response.data;
    //     console.log("Interest get response : ", response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
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

    onClickImage1(event: any){
      //form data .append
      this.image1 = event.target.files[0]
      console.log("PICTURE array : ", this.image1);
      
    },
    onClickImage2(event: any){
      //form data .append
      this.image2 = event.target.files[0]
      console.log("PICTURE array : ", this.image2);
      
    },
    onClickImage3(event: any){
      //form data .append
      this.image3 = event.target.files[0]
      console.log("PICTURE array : ", this.image3);
      
    },
    onClickImage4(event: any){
      //form data .append
      this.image4 = event.target.files[0]
      console.log("PICTURE array : ", this.image4);
      
    },

    async addProfilePhotos(event: any){

      const images: any = [
          this.image1,
          this.image2,
          this.image3,
          this.image4
        ] 
        
        const formData = new FormData();
        
        console.log(this.image1);
      for (let i = 0; i < images.length; i++) {
        console.log('image ' + i , images[i])
        formData.append('image'+(i+1), images[i]);
        console.log("Photos data", formData);
      }
      
      try {
        console.log("RQT", formData);
        new BackendApi('post', 'https://127.0.0.1:8000/api/profiles/pictures').callApi(formData, 'multipart/form-data')
        await router.push({ name: 'ProfileScreen'})
      }
      catch (err) {
        console.log("ERROR PICTURES : ", err);
        this.addError(this.getErrorText(err))
      }
    }
  },
});
</script>
