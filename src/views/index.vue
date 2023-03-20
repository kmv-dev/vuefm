<template>
  <div class="home-page"><RadioList :listStation="stations" /></div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import RadioList from "@/components/RadioList/index.vue";
const store = useStore();
const stations = computed(() => store.getters.getRadioList);
</script>
