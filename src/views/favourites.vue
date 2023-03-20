<template>
  <div v-if="stations[0]" class="home-page">
    <RadioList :listStation="stations" />
  </div>
  <div v-else>Favourites PAGE</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import RadioList from "@/components/RadioList/index.vue";
const store = useStore();
const stations = computed(() => store.getters.getRadioList);
</script>
