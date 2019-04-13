<template>
  <div class="main-view">
    <v-app id="loading" v-if="loading">
      <v-layout row justify-center>
        <v-dialog
          v-model="loading"
          persistent
          fullscreen
          content-class="loading-dialog"
        >
          <v-container fill-height>
            <v-layout row justify-center align-center>
              <v-progress-circular
                indeterminate
                :size="100"
                :width="15"
                color="white"
              ></v-progress-circular>
            </v-layout>
          </v-container>
        </v-dialog>
      </v-layout>
    </v-app>

    <div class="join-view" v-if="!loading">
      <div class="bg"></div>
      <div class="vertical-alignment-wrapper">
        <div class="wrapper-center">
          <div>
            <div class="logo-container">
              <div class="logo-center-block">
                <span>Kahoot</span>
              </div>
            </div>

            <form @submit.prevent="submitForm()">
              <v-text-field
                required
                v-model="input"
                :placeholder="pinValid ? 'Nickname' : 'Game PIN'"
                solo
              ></v-text-field>
              <v-btn type="submit" block large>{{
                pinValid ? "OK, go!" : "Enter"
              }}</v-btn>
            </form>
          </div>
        </div>

        <div class="wrapper-bottom">
          <p>
            Create your own game for FREE at
            <strong>
              <a href="https://play.fptu.tech">play.fptu.tech</a>
            </strong>
          </p>
        </div>
      </div>
    </div>

    <v-snackbar v-model="snackbar" bottom color="error" :timeout="2000">
      <span>
        <v-icon style="font-size: 1.5rem;" color="white">error</v-icon>
      </span>
      {{ text }}
    </v-snackbar>
  </div>
</template>

<script>
import { setTimeout } from "timers";
import firebase from "firebase";
const db = firebase.firestore();

export default {
  data() {
    return {
      loading: false,
      text: "",
      snackbar: false,
      input: "",
      pinValid: false,
      games: []
    };
  },
  created: function() {
    this.loading = true;

    setTimeout(
      function() {
        this.loading = false;
      }.bind(this),
      600
    );

    this.$bind("games", db.collection("games")).then(games => {
      this.games = games;
    });
  },
  methods: {
    submitForm: function() {
      if (!this.pinValid) {
        this.loading = true;

        setTimeout(
          function() {
            this.loading = false;

            if (this.games.findIndex(e => e.pin === this.input) !== -1) {
              window.localStorage.setItem("pin", this.input);
              this.pinValid = true;
              this.input = "";
            } else {
              this.text = "Invalid PIN! Please try again!";
              this.snackbar = true;
            }
          }.bind(this),
          1000
        );
      } else {
        this.loading = true;

        setTimeout(
          function() {
            this.loading = false;
            window.localStorage.setItem("nickname", this.input);
            this.$router.push("/player");
          }.bind(this),
          1000
        );
      }
    }
  }
};
</script>

<style lang="scss" src="./Index.scss"></style>
