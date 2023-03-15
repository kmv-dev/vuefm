<template>
  <div class="filter">
    <div class="filter__item">Relax</div>
    <div class="filter__item">Classic</div>
    <div class="filter__item">Dance</div>
    <div class="filter__item">Club</div>
    <div class="filter__item">Off</div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.filter {
  margin-left: 50px;
  font-size: 14px;
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid rgba(60, 60, 60, 0.12);
    background: #ffffff;
    border-radius: 8px;
    width: 52px;
    height: 50px;
    margin-bottom: 70px;
    &::after {
      content: '';
      position: absolute;
      background: rgba(60, 60, 60, 0.12);
      width: 1px;
      height: 70px;
      bottom: calc(-100% - 23px);
      left: calc(100% - 25px);
    }
    &:last-child::after {
      display: none;
    }
  }
}
</style>