<template>
  <div class="player-view">
    <div class="screen instructions-screen">
      <div class="status-bar status-bar--header">
        <div class="status-bar__item status-bar__game-pin">PIN: {{ pin }}</div>
        <div class="status-bar__item status-bar__username">{{ nickname }}</div>
      </div>
      <div class="screen__main instructions">
        <h1>You're in!</h1>
        <h2 class="instructions__subheader">See your nickname onscreen?</h2>
        <ul class="players__members-list"></ul>
      </div>
      <!-- <div class="status-bar status-bar--footer">
        <div class="status-bar__item status-bar__username"></div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      pin: window.localStorage.getItem("pin") || "123456",
      nickname: window.localStorage.getItem("nickname") || "guest"
    };
  }
};
</script>

<style lang="scss" src="./Player.scss"></style>
