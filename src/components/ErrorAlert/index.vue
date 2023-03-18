<template>
  <div class="error-alert">
    <div class="error-alert__wrap">
      <TransitionGroup tag="ul" name="list" class="container">
        <div v-for="(error, index) in errors" :key="error" class="error-alert__item" @click="add">
          <span><span class="error-alert__mark">!</span> {{ error }}</span>
          <span class="error-alert__close icon-off_close" @click="close(index)" />
        </div>
      </TransitionGroup>

    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex';
const store = useStore();

const errors = computed(() => store.getters.getErrorMessages)
const removeError = (msg) => store.dispatch('removeErrorMessage', msg)

const close = (msg) => {
  removeError(msg)
}
</script>

<style lang="scss" scoped>
.error-alert {
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
    background-color: #fadea0;
    padding: 5px 12px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    margin: 5px 0;
    color: #111;
    font-weight: 500;
  }

  &__mark {
    color: red;
    font-size: 18px;
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