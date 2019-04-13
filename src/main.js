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
const db = firebase.firestore();

Vue.config.productionTip = false;

Vue.firebase;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(firestorePlugin);

new Vue({
  data: {
    // Usually an array for collection
    todos: [],
    // and null for documents
    currentTodo: null
  },
  firestore: {
    games: db.collection("games")
  }
});
