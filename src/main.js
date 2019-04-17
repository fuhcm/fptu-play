import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import { firestorePlugin } from "vuefire";

const firebaseConfig = {
  apiKey: "AIzaSyDQoBXs-Meo-o1WclFtJwaOwJNbapyETmc",
  authDomain: "kahoot-clone-88d2d.firebaseapp.com",
  databaseURL: "https://kahoot-clone-88d2d.firebaseio.com",
  projectId: "kahoot-clone-88d2d",
  storageBucket: "kahoot-clone-88d2d.appspot.com",
  messagingSenderId: "521389594538"
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(firestorePlugin);
