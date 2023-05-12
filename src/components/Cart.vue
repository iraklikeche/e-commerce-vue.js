<script setup>
import { useCartStore } from "../stores/cart";
import { computed } from "vue";

const { cart, removeItemFromCart } = useCartStore();

const cartSubtotal = computed(() => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return parseFloat(total.toFixed(2));
});

const cartItemsTotal = computed(() =>
  cart.map((item) => item.price * item.quantity)
);

const truncateImgName = (name) => {
  if (name.length > 20) {
    return name.substring(0, 50) + "...";
  }
  return name;
};
</script>

<template>
  <section class="cart-header cart">
    <h2>#cart</h2>
    <p>Add your coupon code & SAVE upto 70%!</p>
  </section>

  <section class="cart section-p1">
    <table width="100%">
      <thead>
        <tr>
          <td>Remove</td>
          <td>Image</td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="index">
          <td>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="icon"
              @click="() => removeItemFromCart(item)"
            >
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          </td>
          <td>
            <img :src="item.imgSrc" alt="" />
          </td>
          <td>
            {{ truncateImgName(item.imgName) }}

            <br />
            <span> ({{ item.size }})</span>
          </td>
          <td>${{ item.price }}</td>
          <td>
            <input v-model="item.quantity" type="number" />
          </td>
          <td>{{ cartItemsTotal[index] }}$</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="cart-add section-p1">
    <div class="coupon">
      <h3>Apply Coupon</h3>
      <div>
        <input
          type="text"
          placeholder="Enter Your Coupon"
          @input="onQuantityChange(index, $event.target.value)"
        />
        <button class="normal">Apply</button>
      </div>
    </div>

    <div class="subtotal">
      <h3>Cart Totals</h3>
      <table>
        <tr>
          <td>Cart Subtotal</td>
          <td>${{ cartSubtotal }}</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td>
            <strong>$ {{ cartSubtotal }}</strong>
          </td>
        </tr>
      </table>
      <button class="normal">Proceed to checkout</button>
    </div>
  </section>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}
.cart-header {
  background-image: url(@/assets/about/banner.png);
  height: 40vh;
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  padding: 14px;
}
.cart {
  overflow-x: auto;
}

.cart table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  white-space: nowrap;
}

.cart table img {
  width: 50px;
}

.cart table td:nth-child(1) {
  width: 100px;
  text-align: center;
}

.cart table td:nth-child(2) {
  width: 150px;
  text-align: center;
}

.cart table td:nth-child(3) {
  width: 250px;
  text-align: center;
}

.cart table td:nth-child(4),
.cart table td:nth-child(5),
.cart table td:nth-child(6) {
  width: 150px;
  text-align: center;
}

.cart table td:nth-child(5) input {
  width: 70px;
  padding: 10px 5px 10px 15px;
}

.cart table thead {
  border: 1px solid #e2e9e1;
  border-left: none;
  border-right: none;
}

.cart table thead td {
  font-weight: 700;
  text-transform: uppercase;
  font: size 13px;
  padding: 18px 0;
}

.cart table tbody tr td {
  padding-top: 15px;
}

.cart table thead td {
  font-size: 13px;
}

.cart-add {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.coupon {
  width: 50%;
  margin-bottom: 30px;
}

.coupon h3 {
  padding-bottom: 15px;
}

.coupon input {
  padding: 10px 20px;
  outline: none;
  width: 60%;
  margin-right: 10px;
  border: 1px solid #e2e9e1;
}

.coupon button,
.subtotal button {
  background-color: #088178;
  color: #fff;
  padding: 12px 20px;
}

.subtotal {
  width: 50%;
  margin-bottom: 30px;
  border: 1px solid #e2e9e1;
  padding: 30px;
}

.subtotal table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

.subtotal table td {
  width: 50%;
  border: 1px solid #e2e9e1;
  padding: 10px;
  font-size: 13px;
}

.subtotal h3 {
  padding-bottom: 15px;
}
</style>
