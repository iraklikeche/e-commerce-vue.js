<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const products = ref(null);
const product = ref([]);
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    products.value = data;
    product.value = products.value.find(
      (item) => item.id === parseInt(route.params.id)
    );

    console.log(data);
  });

const route = useRoute();

console.log(route.params);
</script>

<template>
  <div class="pro">
    <div>
      <img :src="product.image" alt="" />
    </div>
    <div class="desc">
      <span>{{ product.title }}</span>

      <h5>{{ product.description }}</h5>

      <h4>{{ product.price }}$</h4>
    </div>
    <a href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-cart-fill cart"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        /></svg
    ></a>
  </div>
</template>

<style scoped>
.pro {
  width: 100%;
  min-width: 250px;
  padding: 10px 24px;
  border: 1px solid #cce7d0;
  border-radius: 25px;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin: 15px 0;
  transition: 0.2s ease;
  position: relative;

  display: flex;
  align-items: center;
}

.pro:hover {
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}
.pro img {
  width: 80%;
  border-radius: 20px;
}
.pro .desc {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 50%;
}

.pro .desc span {
  color: #060663;
  font-size: 35px;
}

.pro .desc h5 {
  padding-top: 7px;
  color: #1a1a1a;
  font-size: 24px;
}
.pro .desc svg {
  font-size: 16px;
  color: rgb(243, 181, 25);
}

.pro .desc h4 {
  padding-top: 7px;
  font-size: 30px;
  font-weight: 700;
  color: #088178;
}

.pro .cart {
  width: 80px;
  height: 80px;
  line-height: 40px;
  border-radius: 50px;
  background-color: #e8f6ea;
  color: #088178;
  position: absolute;
  bottom: 10px;
  left: 50%;
}
</style>
