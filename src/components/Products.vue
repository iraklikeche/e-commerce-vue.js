<script setup>
import { ref } from "vue";

const products = ref(null);
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    products.value = data;
    console.log(data);
  });

console.log(products.value);
</script>

<template>
  <section class="product1 section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Morden Design</p>
    <div class="pro-container">
      <div class="pro" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="" />
        <div class="desc">
          <span>{{ product.title }}</span>
          <h5>{{ product.description }}</h5>
          <h4>{{ product.price }}$</h4>
        </div>
        <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-p1 {
  padding: 40px 80px;
}

.product1 .pro-container {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  flex-wrap: wrap;
}
.product1 {
  text-align: center;
}

.product1 .pro {
  width: 21%;
  min-width: 250px;
  padding: 10px 12px;
  border: 1px solid #cce7d0;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin: 15px 0;
  transition: 0.2s ease;
  position: relative;
}

.product1 .pro:hover {
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}
.product1 .pro img {
  width: 100%;
  border-radius: 20px;
}

.product1 .pro .desc {
  text-align: start;
  padding: 10px 0;
}

.product1 .pro .desc span {
  color: #060663;
  font-size: 12px;
}

.product1 .pro .desc h5 {
  padding-top: 7px;
  color: #1a1a1a;
  font-size: 14px;
}

.product1 .pro .desc i {
  font-size: 12px;
  color: rgb(243, 181, 25);
}

.product1 .pro .desc h4 {
  padding-top: 7px;
  font-size: 15px;
  font-weight: 700;
  color: #088178;
}

.product1 .pro .cart {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50px;
  background-color: #e8f6ea;
  color: #088178;
  position: absolute;
  bottom: 20px;
  right: 10px;
}
</style>
