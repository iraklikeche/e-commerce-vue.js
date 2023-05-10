<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
// import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/cart";

// const { cart, cartItems } = storeToRefs(useCartStore());
const { addItemToCart, cart, cartItems } = useCartStore();

const product = ref([]);
let itemSize = ref("Small");
let itemQtt = ref(1);
let itemId = ref(1);

const storeProduct = ref({});
const route = useRoute();
fetch(`https://fakestoreapi.com/products/${route.params.id}`)
  .then((response) => response.json())
  .then((data) => {
    product.value = data;
    itemId.value = data.id;
  });

const checkout = () => {
  storeProduct.value = {
    id: itemId.value,
    size: itemSize.value,
    quantity: itemQtt.value,
  };

  addItemToCart(storeProduct.value);
};
</script>

<template>
  <section class="pro-details section-p1">
    <div class="single-pro-image">
      <img :src="product.image" style="width: 80%" id="mainImg" alt="T-shirt" />
    </div>
    <div class="single-pro-details">
      <h6>{{ product.category }}</h6>
      <h4>{{ product.title }}</h4>
      <h2>${{ product.price }}</h2>
      <select v-model="itemSize">
        <option>XL</option>
        <option>XXL</option>
        <option>Large</option>
        <option>Small</option>
      </select>
      <input v-model="itemQtt" type="number" />
      <button class="normal" @click="checkout">Add To Cart</button>

      <h4>Product Details</h4>
      <span>
        {{ product.description }}
      </span>
    </div>
  </section>
</template>

<style scoped>
.single-pro-image {
  width: 40%;
  margin-right: 50px;
  padding-top: 50px;
}

.pro-details {
  display: flex;
  margin-top: 20px;
}

.pro-details .single-pro-details {
  width: 50%;
  padding-top: 50px;
}

.pro-details .single-pro-details h4 {
  padding: 40px 0 20px 0;
  font-size: 24px;
}
.pro-details .single-pro-details h2 {
  font-size: 26px;
}
.pro-details .single-pro-details h6 {
  font-size: 20px;
  text-transform: capitalize;
  /* letter-spacing: 1.1px; */
}

.pro-details .single-pro-details select {
  display: block;
  padding: 5px 10px;
  margin-bottom: 10px;
}

.pro-details .single-pro-details button {
  background-color: #088178;
  color: #fff;
}

.pro-details .single-pro-details input {
  width: 50px;
  height: 47px;
  padding-left: 10px;
  font-size: 16px;
  margin-right: 10px;
}

.pro-details .single-pro-details span {
  line-height: 25px;
}

.pro-details .single-pro-image {
  width: 40%;
  margin-right: 50px;
}

/* 
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
} */
</style>
