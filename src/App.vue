<template>
  <div class="primary">
    <Header />
    <RouterView class="primary__content" />
    <span class="primary__banner">2023 © Kireev Maxim - Приложение находится в стадии разработки!</span>
    <ErrorAlert />
  </div>
</template>

<script setup>
import Header from '@/components/Header/index.vue';
import ErrorAlert from '@/components/ErrorAlert/index.vue';

</script>

<style lang="scss">
.primary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #fafafa;
  overflow-x: hidden;
  min-width: 100%;
  min-height: 100vh;
  padding: 0 2rem;
  font-size: 14px;
}

&__banner {
  color: #486491;
  font-weight: 600;
}
}
</style>
