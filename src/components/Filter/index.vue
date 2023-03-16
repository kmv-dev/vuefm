<template>
  <div class="filter">
    <div class="filter__item"><span class="icon-sound"></span></div>
    <div class="filter__item"><span class="icon-radio"></span></div>
    <div class="filter__item"><span class="icon-bass"></span></div>
    <div class="filter__item"><span class="icon-wave"></span></div>
    <div class="filter__item"><span class="icon-cast"></span></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$button-bg: hsla(160, 100%, 37%, 1);

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
    cursor: pointer;

    &:active {
      transform: scale(0.9);
      background-color: darken($button-bg, 5%);
      box-shadow: 0 2px 25px rgba(0, 189, 126, 0.7);
    }

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