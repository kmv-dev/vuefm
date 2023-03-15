<template>
  <header class="header">
    <div class="header__inner">
      <img alt="logo" class="header__logo" src="@/assets/img/logo.svg" />
      <div>
        <audio controls :src="radioUrl" id="myAudio"></audio>
        <nav class="header__nav">
          <RouterLink to="/" class="header__link">Home</RouterLink>
          <RouterLink to="/favourites" class="header__link">Favourites</RouterLink>
        </nav>
      </div>
    </div>
    <Filter />
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'

import Filter from "../Filter/index.vue"

const store = useStore()

//getters
const radioUrl = computed(() => store.getters.getUrl)
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &__logo {
    width: 66px;
    transform: rotate(-90deg);
    margin-right: 10px;
    cursor: pointer;
  }
  &__inner {
    display: flex;
    align-items: flex-start;
  }
  &__nav {
    margin-top: 10px;
  }
  &__link {
    padding: 0 1rem;
    text-decoration: none;
    color: #2c3e50;
    border-left: 1px solid rgba(60, 60, 60, 0.12);
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
}
</style>
