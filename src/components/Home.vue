<script setup>
import Header from "./Header.vue";
import Hero from "./Hero.vue";
import Feature from "./Feature.vue";
import Products from "./Products.vue";
</script>

<template>
  <div>
    <Header />

    <Hero />

    <Feature />

    <Products />
  </div>
</template>

<style scoped>
button.normal {
  font-size: 14px;
  font-weight: 600;
  padding: 15px 30px;
  color: #000;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.2s;
}

button.white {
  font-size: 13px;
  font-weight: 600;
  padding: 11px 18px;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #fff;
  outline: none;
  transition: 0.2s;
}

.section-p1 {
  padding: 40px 80px;
}

.section-m1 {
  margin: 40px 0;
}

/* ----------------- HERO ------------------ */
</style>
