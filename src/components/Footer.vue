<script setup>
const date = new Date().getFullYear();
</script>

<template>
  <footer class="section-p1">
    <div class="col">
      <img src="@/../public/img/logo.png" alt="logo" class="logo" />
      <h4>Contact</h4>
      <p>
        <strong>Adress:</strong> 562 Wellington Road,Street 32,San Francisco
      </p>
      <p><strong>Phone:</strong>+01 2222 365</p>
      <p><strong>Hours:</strong>:10:00 - 18:00. Mon - Sat</p>
      <div class="follow">
        <p>Follow Us</p>
        <!-- <div class="icon"> -->
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
      <!-- </div> -->
    </div>
    <div class="col">
      <h4>About</h4>
      <a href="#">About Us</a>
      <a href="#">Delivery Information</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms & Conditions</a>
      <a href="#">Contact Us</a>
    </div>
    <div class="col">
      <h4>My Account</h4>
      <a href="#">Sign In</a>
      <a href="#">View Cart</a>
      <a href="#">My Wishlist</a>
      <a href="#">Track My Order</a>
      <a href="#">Help</a>
    </div>
    <div class="col install">
      <h4>Install App</h4>
      <p>From App Store or Google Play</p>
      <div class="row">
        <img src="@/../public/img/pay/app.jpg" alt="apple" />
        <img src="@/../public/img/pay/play.jpg" alt="anroid" />
      </div>
      <p>Secured Payment GateWays</p>
      <img src="@/../public/img/pay/pay.png" alt="" />
    </div>

    <div class="copyright">
      <p>
        &copy;
        {{ date }}
        HTML CSS E-commerce Template
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;

  flex-wrap: wrap;
  justify-content: space-between;
}

footer .col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
}

footer .logo {
  padding-bottom: 30px;
}

footer h4 {
  padding-bottom: 20px;
  font-size: 20px;
}

footer p {
  font-size: 18px;
  margin: 0 0 8px 0;
}

footer a {
  font-size: 16px;
  text-decoration: none;
  color: #222;
  margin-bottom: 10px;
}

footer .follow {
  margin-top: 20px;
}

footer .follow i {
  color: #465b52;
  padding-right: 4px;
  cursor: pointer;
}

footer .install .row img {
  border: 1px solid #088178;
  border-radius: 6px;
}

footer .install img {
  padding: 4px 8px;
  margin: 10px 0 15px 0;
}

footer .follow i:hover,
footer a:hover {
  color: #088178;
}

footer .copyright {
  width: 100%;
  text-align: center;
}
</style>
