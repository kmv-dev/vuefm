<template>
  <div class="radio">
    <div class="radio__inner">
      <div v-for="(item, index) in radioList" :key="item.name" class="radio__item"
        :class="{ radio__item_active: isActive === index }">
        <span class="radio__title" @click="handlePlay(item.stream[0].url, index)">
          {{ item.name }}
        </span>
        <div class="radio__action">
          <div v-if="isLoading && isActive === index" class="radio__preloader preloader">
            <div class="preloader__item"></div>
          </div>
          <div v-if="!isLoading && isActive === index && isPlaying" class="radio__wave wave">
            <span v-for="item in 10" :key="item" class="wave__item"></span>
          </div>
          <span v-if="!isLoading && isActive === index && !isPlaying" class="icon-pause"></span>
          <select v-if="isActive === index" v-model="selected" name="select" class="radio__select" title="Подстанции"
            @input="handlePlayIsSelected($event.target.value, index)">
            <option v-for="option in item.stream" :value="option.url">{{ option.name }}</option>
          </select>
          <span class="radio__add-favourites icon-add_to_queue" @click="demo"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

// actions
const setStreamUrl = (url) => store.dispatch('setStreamUrl', url);
const setAlert = (status, msg) => store.dispatch('setAlert', { status, msg })

// getters
const radioList = computed(() => store.getters.getRadioList);
const radioUrl = computed({
  get() {
    return store.getters.getUrl;
  }, set() { },
});

const audioPlayer = document.getElementById('myAudio');
const selected = ref(radioUrl);
const isLoading = ref(false);
const isActive = ref(null);
const isPlaying = ref(false)

audioPlayer.onpause = function () {
  isPlaying.value = false
};
audioPlayer.onplay = function () {
  isPlaying.value = true
};

const handlePlay = async (url, index) => {
  isActive.value = index;
  isPlaying.value = true
  isLoading.value = true;
  await setStreamUrl(url);
  if (audioPlayer !== null) {
    try {
      await audioPlayer.play();
      isLoading.value = false
    } catch (e) {
      setAlert('error', e)
    }
  }
}
const handlePlayIsSelected = async (url, index) => {
  handlePlay(url, index);
};

const demo = () => {
  setAlert('success', 'Возможность добавить в избранное скоро появится!')
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
    max-height: 25rem;
    overflow-y: auto;
    overflow-x: hidden;
    mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 150%);
    -webkit-mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 150%);

    &::-webkit-scrollbar {
      height: 3px;
      width: 4px;
      border-radius: 100px;
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(125, 133, 154, 0.3);
      border-radius: 100px;
    }
  }

  &__title {
    cursor: pointer;
  }

  &__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 5px;
    min-width: 350px;
    font-size: 14px;
    font-weight: 600;
    color: #213547;

    &:hover {
      background: #E3F2FD;
    }

    &:hover .radio__select {
      background: #E3F2FD;
    }

    &:active .radio__select {
      background: #E3F2FD;
    }

    &_active {
      background-color: #ffffff;
      box-shadow: 0 0.1rem 0.2rem 0 rgba(0, 189, 126, 0.27);
    }
  }

  &__select {
    border: none;
    color: #486491;
    font-size: 12px;
    margin-left: 5px;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  &__action {
    display: flex;
    align-items: center;
  }

  &__add-favourites {
    color: #42b983;
    margin-left: 5px;
    opacity: 0.7;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      opacity: 1;
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
