<template>
  <div class="primary">
    <span class="primary__decor">Progressive</span>
    <Header />
    <RouterView class="primary__content" />
    <span class="primary__banner"
      >2023 © Kireev Maxim - Приложение находится в стадии разработки!</span
    >
    <ErrorAlert />
  </div>
</template>

<script setup>
import Header from "@/components/Header/index.vue";
import ErrorAlert from "@/components/ErrorAlert/index.vue";
</script>

<style lang="scss">
.primary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #fafafa;
  background: linear-gradient(315deg, rgba(17, 17, 17, 0.088), #fafafa);
  overflow-x: hidden;
  min-width: 100%;
  min-height: 100vh;
  padding: 0 2rem;
  font-size: 14px;
  &__content {
    display: flex;
    align-items: center;
  }
  &__decor {
    position: absolute;
    bottom: 18%;
    left: 15%;
    font-weight: 800;
    font-size: 12rem;
    color: #fff;
    z-index: 1;
    text-shadow: 0 8.36px 6.896px #c4b59d, 0 -2px 1px #fff;
  }
  &__banner {
    position: absolute;
    bottom: 0;
    color: #486491;
    font-weight: 600;
  }
  @include _1500 {
    &__decor {
      font-size: 10rem;
    }
  }
  @include _1400 {
    &__decor {
      font-size: 8rem;
    }
  }
  @include _1300 {
    &__decor {
      font-size: 7rem;
    }
  }
  @include _1199 {
    &__decor {
      font-size: 6rem;
    }
  }
}
</style>
