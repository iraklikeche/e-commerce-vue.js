<script setup>
import Home from "./components/Home.vue";
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
