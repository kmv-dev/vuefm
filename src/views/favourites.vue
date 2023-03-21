<template>
  <div v-if="stations[0]" class="favourites-page">
    <span class="favourites-page__decor">favourites</span>
    <RadioList :listStation="stations" />
  </div>
  <div v-else>Favourites PAGE</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import RadioList from "@/components/RadioList/index.vue";
const store = useStore();
// const stations = computed(() => store.getters.getRadioList);
const stations = [
  {
    name: "Business FM",
    stream: [{ name: "kbps128", url: "https://bfm.hostingradio.ru:9075/fm" }],
  },
  {
    name: "Nrj",
    stream: [
      {
        name: "kbps128",
        url: "https://pub0201.101.ru:443/stream/reg/mp3/128/region_energy_118?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiI1ZDQ3NGQwOGQ5MGQwN2YzYTM0ZWI5ZGFiZGJiYWQwMyIsIklQIjoiMzEuMjExLjY5LjY4IiwiVUEiOiJNb3ppbGxhXC81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXRcLzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZVwvMTExLjAuMC4wIFNhZmFyaVwvNTM3LjM2IiwiUmVmIjoiaHR0cHM6XC9cL3d3dy5lbmVyZ3lmbS5ydVwvIiwidWlkX2NoYW5uZWwiOiI5OSIsInR5cGVfY2hhbm5lbCI6ImNoYW5uZWwiLCJ0eXBlRGV2aWNlIjoiUEMiLCJCcm93c2VyIjoiQ2hyb21lIiwiQnJvd3NlclZlcnNpb24iOiIxMTEuMC4wLjAiLCJTeXN0ZW0iOiJXaW5kb3dzIDEwIiwiZXhwIjoxNjc4OTg5ODkyfQ.-jMipYmyWkLTOgsNOpuNsSU9Sp8tiqTxuRNiH2wHwcs",
      },
    ],
  },
  {
    name: "Like FM",
    stream: [
      {
        name: "kbps128",
        url: "http://pub0302.101.ru:8000/stream/air/aac/64/219?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJrZXkiOiJiZDgyNGJhNzY0ZjIyNzNhZmE3YzQ4OTIxYzIxNzg2ZCIsIklQIjoiMzEuMjExLjY5LjY4IiwiVUEiOiJNb3ppbGxhXC81LjAgKExpbnV4OyBBbmRyb2lkIDYuMDsgTmV4dXMgNSBCdWlsZFwvTVJBNThOKSBBcHBsZVdlYktpdFwvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lXC8xMTEuMC4wLjAgTW9iaWxlIFNhZmFyaVwvNTM3LjM2IiwiUmVmIjoiaHR0cHM6XC9cL3d3dy5saWtlZm0ucnVcLyIsInVpZF9jaGFubmVsIjoiMjE5IiwidHlwZV9jaGFubmVsIjoiY2hhbm5lbCIsInR5cGVEZXZpY2UiOiJwaG9uZSIsIkRldmljZSI6Ik5leHVzIiwiQnJvd3NlciI6IkNocm9tZSIsIlN5c3RlbSI6IkFuZHJvaWQiLCJleHAiOjE2Nzg5OTAwNzF9.ZWwJdDnJCmu0_1vJ1LPaqvPmrw_pyqMR91dFyHjin98",
      },
    ],
  },
  {
    name: "Эльдорадио",
    stream: [
      {
        name: "kbps128",
        url: "http://emgspb.hostingradio.ru/eldoradio128.mp3",
      },
    ],
  },
  {
    name: "Дорожное радио",
    stream: [
      { name: "kbps256", url: "http://dorognoe.hostingradio.ru:8000/radio" },
      {
        name: "kbps64",
        url: "http://dorognoe.hostingradio.ru:8000/dorognoe",
      },
      {
        name: "Танцы",
        url: "http://dor2server.streamr.ru:8000/dorognoe1945.mp3",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.favourites-page {
  &__decor {
    position: absolute;
    bottom: 33%;
    right: 14%;
    font-weight: 800;
    font-size: 3rem;
    color: #fff;
    transform: rotate(90deg);
    text-shadow: 0 4.36px 2.896px #c4b59d, 0 -2px 1px #fff;
  }
  @include _1500 {
    &__decor {
      right: 7%;
    }
  }
  @include _1400 {
    &__decor {
      right: 8%;
    }
  }
  @include _1300 {
    &__decor {
      right: 5%;
      font-size: 2rem;
    }
  }
  @include _1199 {
    &__decor {
      right: 4%;
    }
  }
}
</style>
