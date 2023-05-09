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
    <img :src="product.image" alt="" />
    <div class="desc">
      <span>{{ product.title }}</span>
      <h5>{{ product.description }}</h5>
      <h4>{{ product.price }}$</h4>
    </div>
  </div>
</template>

<style scoped>
.pro {
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
}

.pro:hover {
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}
.pro img {
  width: 70%;
  border-radius: 20px;
}
.pro .desc {
  text-align: start;
  padding: 10px 0;
}

.pro .desc span {
  color: #060663;
  font-size: 12px;
}

.pro .desc h5 {
  padding-top: 7px;
  color: #1a1a1a;
  font-size: 18px;
}
.pro .desc i {
  font-size: 16px;
  color: rgb(243, 181, 25);
}

.pro .desc h4 {
  padding-top: 7px;
  font-size: 18px;
  font-weight: 700;
  color: #088178;
}

.pro .cart {
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50px;
  background-color: #e8f6ea;
  color: #088178;
  position: absolute;
  bottom: 10px;
  right: 10px;
}
</style>
