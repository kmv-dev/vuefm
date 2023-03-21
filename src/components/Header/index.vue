<template>
  <header class="header">
    <div
      class="transition"
      :class="{ 'anim-trans': isAnimation === true }"
    ></div>
    <div class="header__logo-box" ref="offset">
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
        <span
          v-for="(link, index) in links"
          :key="link.name"
          class="header__link"
          :class="[toggleClass, { active: isActiveLink === index }]"
          @click="togglePage(link.to, index)"
          >{{ link.title }}</span
        >
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import router from "../../router";

const store = useStore();
const radioUrl = computed(() => store.getters.getUrl);

const links = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Избранное",
    to: "/favourites",
  },
];
const isActiveLink = ref(0);
const isAnimation = ref(false);
const offset = ref(null);
const xPos = ref(null);
const yPos = ref(null);
const toggleClass = computed(() => {
  return [
    {
      disabled: isAnimation.value,
    },
  ];
});

onMounted(() => {
  document.getElementById("app").addEventListener("mousemove", (event) => {
    xPos.value = event.pageX;
    yPos.value = event.pageY;
    createOffset();
  });
});

const togglePage = (route, index) => {
  if (route === router.currentRoute.value.fullPath) {
    return;
  }
  isAnimation.value = true;
  setTimeout(async () => {
    router.push(route);
    isActiveLink.value = index;
  }, 1000);
  setTimeout(() => {
    isAnimation.value = false;
  }, 3000);
};

const createOffset = () => {
  let [moveX, moveY] = [xPos.value / +10, yPos.value / +22];
  offset.value.style.transform = `translate3d(${moveX / 2}px, ${moveY}px, 0)`;
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
  &__nav {
    z-index: 10;
  }
  &__logo-box {
    position: absolute;
    left: 10%;
    z-index: 20;
  }
  &__logo {
    position: absolute;
    left: -22%;
    top: 16%;
    width: 50px;
    margin-bottom: 25px;
    opacity: 1;
    pointer-events: none;
  }

  &__audio {
    margin-top: 10px;
    padding: 8px 0;
  }

  &__link {
    padding: 0 1rem;
    text-decoration: none;
    color: #546e7a;
    border-left: 1px solid rgba(60, 60, 60, 0.12);
    cursor: pointer;
    &.active {
      color: #4bca9e;
    }
    &.disabled {
      pointer-events: none;
    }
    &:hover {
      background-color: #eeeeee;
    }
    &.active:hover {
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
.transition {
  position: absolute;
  left: 0;
  height: 100%;
  max-height: 100vh;
  width: 0;
  background: #111;
  transform: skewX(-5deg) translateX(-50px);
  transition: 2s all ease-in-out;
  -webkit-transition: 2s all ease-in-out;
  z-index: 11;
}
.anim-trans {
  animation: anim 4s ease-in-out;
}

@keyframes anim {
  0% {
    \transform: skewX(0deg) translateX(0%);
    left: 0;
  }
  20% {
    \transform: skewX(0deg) translateX(-0%);
    width: 100%;
  }
  40% {
    \transform: skewX(0deg) translateX(-0%);
    width: 100%;
  }
  60% {
    transform: skewX(-12deg) translateX(100%);
    width: 100%;
    box-shadow: 10px 10px 5px #eaeaea;
  }
  80% {
    transform: skewX(-0.06turn) translateX(100%);
    width: 150%;
    box-shadow: 10px 10px 5px 10px #eaeaea;
  }
  100% {
    transform: skewX(-27deg) translateX(200%);
    width: 160%;
    box-shadow: 10px 10px 5px #eaeaea;
  }
}
</style>
