<template>
  <section class="header">
    <a href=""><img src="../assets/img/logo.png" alt="" /></a>
    <div>
      <ul class="navbar">
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li>
          <a href="#"><i id="lg-bag" class="fa-solid fa-cart-shopping"></i></a>
        </li>
        <i id="close" class="fa-solid fa-xmark"></i>
      </ul>
    </div>
    <div class="mobile">
      <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
      <i class="fa fa-solid fa-bars"></i>
    </div>
  </section>
</template>

<style scoped>
.header {
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 20px 80px;
  background-color: #e3e6f3;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
  z-index: 999;
  position: sticky;
  top: 0;
  left: 0;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar li {
  list-style: none;
  padding: 0 20px;
  position: relative;
}

.navbar li a {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  transition: 0.3s ease;
}

.navbar li a:hover,
.navbar li a.active {
  color: #088178;
}

.navbar li a.active:after,
.navbar li a:hover::after {
  content: "";
  width: 30%;
  height: 2px;
  background-color: #088178;
  position: absolute;
  bottom: -4px;
  left: 20px;
}

.mobile {
  display: none;
  align-items: center;
}

#close {
  display: none;
}
</style>
