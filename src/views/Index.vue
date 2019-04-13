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
                v-model="pin"
                placeholder="Game PIN"
                solo
              ></v-text-field>
              <v-btn type="submit" block large>Enter</v-btn>
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
      Invalid PIN! Please try again!
    </v-snackbar>
  </div>
</template>

<script>
import { setTimeout } from "timers";

export default {
  data() {
    return {
      dialog: false,
      loading: false,
      sound: true,
      widgets: false,
      snackbar: false,
      pin: ""
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
  },
  methods: {
    submitForm: function() {
      this.loading = true;

      setTimeout(
        function() {
          this.loading = false;
          this.snackbar = true;
        }.bind(this),
        1000
      );
    }
  }
};
</script>

<style lang="scss">
.main-view {
  height: 100%;
  font-family: Montserrat, sans-serif;

  .join-view {
    height: 100%;
    text-align: center;
    position: relative;
    transition: margin-top 1s;

    .bg {
      animation: bgcolor 14s infinite;
      animation-direction: alternate;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: #45a3e5;
    }

    .vertical-alignment-wrapper {
      position: relative;
      z-index: 2;
      display: -webkit-flex;
      display: flex;
      flex-direction: column;
      height: 100%;

      .wrapper-center {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex: 1 0 auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .logo-container {
          padding-top: 4.25rem;
          padding-bottom: 1.5rem;

          .logo-center-block {
            width: 255px;
            height: 120px;
            background: url(../assets/logo.png) center/contain no-repeat;

            span {
              display: none;
            }
          }
        }

        button {
          background-color: #333;
          color: white;
          text-transform: capitalize;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .v-text-field__slot {
          input {
            color: #333;
            text-align: center;
            font-weight: bold;
            font-size: 1.5rem;
            /* line-height: 50px; */
          }
        }

        .v-text-field__details {
          display: none;
        }
      }

      .wrapper-bottom {
        justify-self: flex-end;
        flex: 0 0 auto;

        p {
          color: #fff;
          margin: 0 0 10px;
          font-family: Montserrat, sans-serif;
          font-size: 1rem;
          letter-spacing: normal;
          text-align: center;
          background-color: transparent;
        }

        a {
          color: #fff;
        }
      }
    }
  }
}

@keyframes bgcolor {
  0% {
    background-color: #45a3e5;
  }
  17% {
    background-color: #3cc;
  }
  34% {
    background-color: #66bf39;
  }
  51% {
    background-color: #ffa602;
  }
  67% {
    background-color: #eb670f;
  }
  84% {
    background-color: #f35;
  }
  100% {
    background-color: #864cbf;
  }
}

.loading-dialog {
  background-color: #45a3e5;
}

.v-snack__wrapper {
  width: 100% !important;
  max-width: unset !important;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: none;

  .v-snack__content {
    display: unset;
    span {
      margin-right: 0.5rem;
    }
  }
}
</style>
