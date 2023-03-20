<template>
  <header class="header">
    <div class="header__logo-box" ref="logoRef">
      <div class="header__title">
        <img alt="logo" class="header__logo" src="@/assets/img/logo.svg" />
        radio stations
      </div>
    </div>
    <div class="header__inner">
      <audio
        class="header__audio"
        controls
        :src="radioUrl"
        id="myAudio"
      ></audio>
      <nav class="header__nav">
        <RouterLink to="/" class="header__link">Home</RouterLink>
        <RouterLink to="/favourites" class="header__link header__link_disabled"
          >Favourites</RouterLink
        >
      </nav>
    </div>
    <Filter />
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";
import Filter from "../Filter/index.vue";

const store = useStore();
const radioUrl = computed(() => store.getters.getUrl);

const logoRef = ref(null);
const xPos = ref(null);
const yPos = ref(null);

onMounted(() => {
  document.getElementById("app").addEventListener("mousemove", (event) => {
    xPos.value = event.pageX;
    yPos.value = event.pageY;
    createOffset();
  });
});

const createOffset = () => {
  let [moveX, moveY] = [xPos.value / +10, yPos.value / +22];
  let [oneText] = [logoRef.value];
  oneText.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
};
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
    margin-right: 50px;
  }

  &__logo {
    position: absolute;
    left: -22%;
    top: 16%;
    width: 50px;
    margin-bottom: 25px;
    opacity: 0.9;
    pointer-events: none;
  }

  &__audio {
    margin-top: 10px;
    padding: 8px 0;
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
    position: relative;
    margin-right: 150px;
    margin-top: -50%;
    font-family: Roboto, Arial, sans-serif;
    text-align: center;
    font-size: 2.5rem;
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
