<template>
  <header class="header">
    <img alt="logo" class="header__logo" src="@/assets/img/logo.svg" />
    <div class="header__inner">
      <h1 class="header__title header__title_left">Vuefm radio stations :)</h1>
      <audio class="header__audio" controls :src="radioUrl" id="myAudio"></audio>
      <nav class="header__nav">
        <RouterLink to="/" class="header__link">Home</RouterLink>
        <RouterLink to="/favourites" class="header__link header__link_disabled">Favourites</RouterLink>
      </nav>
    </div>
    <Filter />
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

import Filter from '../Filter/index.vue';

const store = useStore();

// getters
const radioUrl = computed(() => store.getters.getUrl);
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  &__inner {
    display: flex;
    flex-direction: column;
    margin-bottom: 34px;
  }

  &__logo {
    width: 115px;
    transform: rotate(-90deg);
    margin-right: 10px;
    margin-bottom: 25px;
    opacity: 0.9;
    pointer-events: none;
  }

  &__nav {
    margin-top: 10px;
  }

  &__audio {
    margin-top: 10px;
  }

  &__link {
    padding: 0 1rem;
    text-decoration: none;
    color: #2c3e50;
    border-left: 1px solid rgba(60, 60, 60, 0.12);

    &_disabled {
      pointer-events: none;
    }

    &:hover {
      background-color: hsla(160, 100%, 37%, 0.2);
    }

    &.router-link-exact-active {
      color: hsla(160, 100%, 37%, 1);
    }

    &.router-link-exact-active:hover {
      background-color: transparent;
    }

    &:first-child {
      border: 0;
    }
  }

  &__title {
    font-family: Roboto, Arial, sans-serif;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 800;
    background-color: #42d392;
    background-image: linear-gradient(315deg, #42d392, #647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    pointer-events: none;
  }
}
</style>
