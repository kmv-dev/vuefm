<template>
  <div class="primary">
    <Header />
    <RouterView class="primary__content" />
  </div>
</template>

<script setup>
import Header from "@/components/Header/index.vue";

</script>

<style lang="scss">
.primary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #fafafa;
  min-width: 100%;
  min-height: 100vh;
  padding: 0 2rem;
  font-size: 14px;
}
</style>
