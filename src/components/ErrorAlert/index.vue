<template>
  <div class="alert" v-if="getAlerts.length">
    <div class="alert__wrap">
      <TransitionGroup tag="ul" name="list">
        <div v-for="(item, index) in getAlerts" :key="item.id" class="alert__item"
          :class="item.status === 'success' ? 'alert__item_success' : 'alert__item_error'">
          <span><span v-if="item.status === 'error'" class="alert__mark">!</span><span v-else
              class="icon-activity"></span> {{ item.message }}</span>
          <span class="alert__close icon-off_close" @click="hideAlert(index)" />
        </div>
      </TransitionGroup>

    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex';
const store = useStore();

const getAlerts = computed(() => store.getters.getAlerts)
const removeAlert = (index) => store.dispatch('removeAlert', index)
let intervalId = ref(null)
const isStopInterval = ref(false)
const isAddInterval = ref(false)

watch(
  () => getAlerts.value.length,
  () => {
    if (getAlerts.value.length === 0) {
      isStopInterval.value = true
    }
    if (!isAddInterval.value) {
      isAddInterval.value = true
      intervalId.value = setInterval(() => {
        hideAlert(0)
      }, 5000)
    }
    if (isStopInterval.value) {
      clearInterval(intervalId.value)
      isAddInterval.value = false
      isStopInterval.value = false
    }
  }
)

const hideAlert = (index) => {
  removeAlert(index)
}
</script>

<style lang="scss" scoped>
.alert {
  position: absolute;
  right: 0;
  bottom: 0;
  color: white;
  min-width: 40%;
  max-height: 278px;
  padding: 10px 15px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;

  &__wrap {
    position: relative;
    display: flex;
    justify-content: end;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 700px;
    border: 1px solid rgba(60, 60, 60, 0.12);
    padding: 5px 12px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    margin: 5px 0;
    color: #111;
    font-weight: 500;

    &_error {
      background-color: #fadea0;
    }

    &_success {
      background-color: rgba(255, 255, 255, 0.8);
      color: #009688;
    }
  }

  &__mark {
    color: #F44336;
  }

  &__close {
    cursor: pointer;
    margin-left: 50px;

    &:hover {
      transform: scale(1.1);
    }

    &::before {
      font-size: 24px;
      color: #111;
    }
  }
}
</style>