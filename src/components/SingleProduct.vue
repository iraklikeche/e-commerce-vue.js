<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useCartStore } from "../stores/cart";
import News from "./News.vue";

const { addItemToCart } = useCartStore();

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

const checkout = (product) => {
  storeProduct.value = {
    id: itemId.value,
    size: itemSize.value,
    quantity: itemQtt.value,
    imgSrc: product.image,
    imgName: product.title,
    price: product.price,
  };

  addItemToCart(storeProduct.value);
};
</script>

<template>
  <section class="pro-details section-p1">
    <div class="single-pro-image">
      <img :src="product.image" id="mainImg" alt="T-shirt" />
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
      <button class="normal" @click="checkout(product)">Add To Cart</button>

      <h4>Product Details</h4>
      <span>
        {{ product.description }}
      </span>
    </div>
  </section>
  <News />
</template>

<style scoped>
.single-pro-image {
  width: 40%;
  margin-right: 50px;
  padding-top: 50px;
}

.single-pro-image img {
  width: 80%;
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

@media (max-width: 799px) {
  .pro-details .single-pro-details h4 {
    padding-top: 10px;
    font-size: 20px;
  }

  .pro-details .single-pro-details select {
    margin-top: 20px;
  }

  .pro-details .single-pro-details h2 {
    font-size: 20px;
  }

  .pro-details {
    align-items: center;
  }

  .single-pro-image img {
    width: 100%;
  }
}
</style>
