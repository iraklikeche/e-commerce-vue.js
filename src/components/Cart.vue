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
        <tr>
          <td>
            <a href="#"><i class="fa-solid fa-xmark"></i></a>
          </td>
          <td>
            <img src="./images/img/products/f1.jpg" alt="" />
          </td>
          <td>Cartoon Astronaut T-shirts</td>
          <td>$118.19</td>
          <td><input type="number" value="1" /></td>
          <td>118.19</td>
        </tr>
        <tr>
          <td>
            <a href="#"><i class="fa-solid fa-xmark"></i></a>
          </td>
          <td><img src="./images/img/products/f2.jpg" alt="" /></td>
          <td>Cartoon Astronaut T-shirts</td>
          <td>$118.19</td>
          <td><input type="number" value="1" /></td>
          <td>$118.19</td>
        </tr>
        <tr>
          <td>
            <a href="#"><i class="fa-solid fa-xmark"></i></a>
          </td>
          <td><img src="./images/img/products/f3.jpg" alt="" /></td>
          <td>Cartoon Astronaut T-shirts</td>
          <td>$118.19</td>
          <td><input type="number" value="1" /></td>
          <td>118.19</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="cart-add section-p1">
    <div class="coupon">
      <h3>Apply Coupon</h3>
      <div>
        <input type="text" placeholder="Enter Your Coupon" />
        <button class="normal">Apply</button>
      </div>
    </div>

    <div class="subtotal">
      <h3>Cart Totals</h3>
      <table>
        <tr>
          <td>Cart Subtotal</td>
          <td>$335</td>
        </tr>
        <tr>
          <td>Shipping</td>
          <td>Free</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td><strong>$335</strong></td>
        </tr>
      </table>
      <button class="normal">Proceed to checkout</button>
    </div>
  </section>
</template>

<style scoped>
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
  width: 70px;
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
