<template>
  <div class="radio">
    <div class="radio__inner">
      <div
        v-for="(item, index) in radioList"
        :key="item.name"
        class="radio__item"
        :class="{ radio__item_active: index === active }"
      >
        <span @click="newPlay(item, index)">{{ item.name }}</span>

        <div v-if="isLoading && index === active" class="radio__preloader preloader">
          <div class="preloader__item"></div>
        </div>
        <div v-if="!isLoading && index === active" class="radio__wave wave">
          <span v-for="item in 10" :key="item" class="wave__item"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isLoading= ref(false)
const active = ref(null)
const duble= ref(true)

//getters
const radioList = computed(() => store.getters.getRadioList)
const radioUrl = computed(() => store.getters.getUrl)

//actions
const playRadio = (url) => store.dispatch('playRadio', url)

watch(
  () => radioUrl.value,
  () => {
    duble.value = false
  }
)

const newPlay = async (item, index) => {
  active.value = index
  isLoading.value = true
  await playRadio(item.stream[0].url)
  const audioPlayer = document.getElementById('myAudio')
  if (audioPlayer !== null) {
    const playPromise = audioPlayer.play()
    if (playPromise !== undefined) {
      playPromise
        .then(function () {
          isLoading.value = false
        })
        .catch(function (e) {})
    }
  }
}
</script>
<style lang="scss" scoped>
.radio {
  padding: 50px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  margin-top: -70px;
  &__inner {
    padding-right: 20px;
    max-height: 30rem;
    overflow-y: auto;
    mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 150%);
    -webkit-mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 150%);
  }
  &__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 2px 5px;
    min-width: 300px;
    font-size: 14px;
    font-weight: 600;
    color: #213547;
    cursor: pointer;
    &_active {
      background-color: #ffffff;
      box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 0, 0, 0.15);
    }
  }
  &__preloader {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }
  .preloader {
    &__item {
      position: absolute;
      width: 14px;
      height: 14px;
      border: 1px solid rgba(0, 0, 0, 0.7);
      border-radius: 50%;
      border-left-color: transparent;
      border-right-color: transparent;
      animation: cssload-spin 575ms infinite linear;
      -o-animation: cssload-spin 575ms infinite linear;
      -ms-animation: cssload-spin 575ms infinite linear;
      -webkit-animation: cssload-spin 575ms infinite linear;
      -moz-animation: cssload-spin 575ms infinite linear;
      box-sizing: border-box;
      @keyframes cssload-spin {
        100% {
          transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-o-keyframes cssload-spin {
        100% {
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-ms-keyframes cssload-spin {
        100% {
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-webkit-keyframes cssload-spin {
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @-moz-keyframes cssload-spin {
        100% {
          -moz-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    }
  }
  &__wave {
    width: 29px;
    height: 23px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .wave {
    &__item {
      display: block;
      width: 1px;
      margin-right: 1px;
      height: 17px;
      background: rgba(0, 0, 0, 0.35);
      animation: sound 0ms -800ms linear infinite alternate;
      transition: height 0.8s;
      @keyframes sound {
        0% {
          opacity: 0.35;
          height: 3px;
        }
        100% {
          opacity: 1;
          height: 15px;
        }
      }
      &:nth-child(1) {
        height: 1px;
        animation-duration: 474ms;
      }

      &:nth-child(2) {
        height: 5px;
        animation-duration: 433ms;
      }

      &:nth-child(3) {
        height: 9px;
        animation-duration: 407ms;
      }

      &:nth-child(4) {
        height: 13px;
        animation-duration: 458ms;
      }

      &:nth-child(5) {
        height: 15px;
        animation-duration: 400ms;
      }

      &:nth-child(6) {
        height: 16px;
        animation-duration: 427ms;
      }

      &:nth-child(7) {
        height: 17px;
        animation-duration: 441ms;
      }

      &:nth-child(8) {
        height: 18px;
        animation-duration: 419ms;
      }

      &:nth-child(9) {
        height: 20px;
        animation-duration: 487ms;
      }

      &:nth-child(10) {
        height: 23px;
        animation-duration: 442ms;
      }
    }
  }
}
</style>
