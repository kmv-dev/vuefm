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
  &__decor {
    position: absolute;
    top: 38%;
    left: 10%;
    font-weight: 800;
    font-size: 14rem;
    color: #fff;
    text-shadow: 0 8.36px 6.896px #c4b59d, 0 -2px 1px #fff;
  }
  &__banner {
    color: #486491;
    font-weight: 600;
  }
}
</style>
