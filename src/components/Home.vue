<script setup>
import Header from "./Header.vue"
</script>

<template>
  <div>
    <Header />
    <!-- ------------------ HERO -------------------- -->
    <section class="hero">
      <h4>Trade-in-offer</h4>
      <h2>Super value deals</h2>
      <h1>On all products</h1>
      <p>Save more with coupons & up to 70% off!</p>
      <button>Shop Now</button>
    </section>
    <!-- ------------------ FEATURE -------------------- -->
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&family=Montserrat&family=Poppins:wght@100;200;300;400;600;700&family=Ubuntu:ital,wght@0,300;0,400;1,300&display=swap");

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

h1 {
  font-size: 64px;
  line-height: 84px;
  color: #222;
}

h2 {
  font-size: 52px;
  line-height: 54px;
  color: #222;
}

h4 {
  font-size: 32px;
  color: #222;
}

h6 {
  font-weight: 700;
  font-size: 12px;
}

p {
  font-size: 16px;
  color: #465b52;
  margin: 15px 0 20px 0;
}

.section-p1 {
  padding: 40px 80px;
}

.section-m1 {
  margin: 40px 0;
}

/* ----------------- HERO ------------------ */

.hero {
  background-image: url(../assets/img/hero4.png);
  height: 90vh;
  background-size: cover;
  background-position: top 25% right 0;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.hero h4 {
  padding-bottom: 15px;
}

.hero h1 {
  color: #088178;
}

.hero button {
  background-image: url(../assets/img/button.png);
  background-color: transparent;
  color: #088178;
  border: 0;
  padding: 14px 80px 14px 65px;
  background-repeat: no-repeat;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
}
</style>
