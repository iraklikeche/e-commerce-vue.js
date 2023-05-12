<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cart";
import { storeToRefs } from "pinia";

const { cart } = storeToRefs(useCartStore());

const products = ref(null);
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    products.value = data;
  });

function truncateWords(text, maxWords) {
  const words = text.split(" ");

  if (words.length <= maxWords) {
    return text;
  }

  return words.slice(0, maxWords).join(" ") + "...";
}
</script>

<template>
  <section class="product1 section-p1">
    <h2>Featured Products</h2>
    <p>Summer Collection New Morden Design</p>
    <div class="pro-container">
      <RouterLink
        :to="`/product/${product.id}`"
        class="pro"
        :class="{ 'in-cart': cart.some((e) => e.id === product.id) }"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="product.image" alt="" />
        <div class="desc">
          <span>{{ product.title }}</span>
          <h5>{{ truncateWords(product.description, 5) }}</h5>
          <h4>{{ product.price }}$</h4>
        </div>
        <a href="#" @click="checkout">
          <i class="fa-solid fa-cart-shopping cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-cart-fill"
              viewBox="0 0 16 16"
              :style="{
                color: cart.some((e) => e.id === product.id)
                  ? '#088178'
                  : 'grey',
              }"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              /></svg></i
        ></a>
      </RouterLink>
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
  padding: 10px 24px;
  border: 1px solid #cce7d0;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin: 15px 0;
  transition: 0.2s ease;
  position: relative;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.product1 .pro:hover {
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}
.product1 .pro img {
  width: 70%;
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
  font-size: 18px;
}

.product1 .pro .desc i {
  font-size: 16px;
  color: rgb(243, 181, 25);
}

.product1 .pro .desc h4 {
  padding-top: 7px;
  font-size: 18px;
  font-weight: 700;
  color: #088178;
}

.product1 .pro .cart {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50px;
  background-color: #e8f6ea;
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.pro.in-cart::after {
  content: "Added To Cart";
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 10px;
  color: #088178;
  font-weight: 700;
  letter-spacing: 1.1px;
}
</style>
