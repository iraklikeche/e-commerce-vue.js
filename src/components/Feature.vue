<script setup>
const features = [
  { img: "../src/assets/features/f1.png", title: "Free Shipping" },
  { img: "../src/assets/features/f2.png", title: "Online Order" },
  { img: "../src/assets/features/f3.png", title: "Save Money" },
  { img: "../src/assets/features/f4.png", title: "Promotions" },
  { img: "../src/assets/features/f5.png", title: "Happy Sell" },
  { img: "../src/assets/features/f6.png", title: "F24/7 Support" },
];
</script>

<template>
  <section class="feature section-p1">
    <div class="fe-box" v-for="feature in features" :key="feature.title">
      <img :src="feature.img" alt="feature-image" />
      <h6>{{ feature.title }}</h6>
    </div>
  </section>
</template>

<style scoped>
.feature {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.feature .fe-box {
  width: 180px;
  text-align: center;
  padding: 25px 15px;
  box-shadow: 20px 20px 34px rgba(0, 0, 0, 0.03);
  border: 1px solid #cce7d0;
  border-radius: 4px;
  margin: 15px 0;
}

.feature .fe-box:hover {
  box-shadow: 10px 10px 54px rgba(70, 62, 221, 0.1);
}

.feature .fe-box img {
  width: 100%;
  margin-bottom: 10px;
}

.feature .fe-box h6 {
  display: inline-block;
  padding: 9px 8px 6px 8px;
  line-height: 1;
  border-radius: 4px;
  color: #088178;
  background-color: #fddde4;
}

.feature .fe-box:nth-child(2) h6 {
  background-color: #cdebbc;
}
.feature .fe-box:nth-child(3) h6 {
  background-color: #d1e8f2;
}
.feature .fe-box:nth-child(4) h6 {
  background-color: #cdd4f8;
}
.feature .fe-box:nth-child(5) h6 {
  background-color: #f6dbf6;
}
.feature .fe-box:nth-child(6) h6 {
  background-color: #fff2e5;
}
</style>
