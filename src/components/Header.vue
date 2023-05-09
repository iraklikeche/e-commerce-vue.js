<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="header">
    <a href=""><img src="@/../public/img/logo.png" alt="" /></a>
    <div>
      <ul class="navbar">
        <li><RouterLink class="active" to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><a href="#">Contact</a></li>
        <li>
          <a href="#"
            ><i id="lg-bag" class="fa-solid fa-cart-shopping">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                /></svg></i
          ></a>
        </li>
        <i id="close" class="fa-solid fa-xmark"></i>
      </ul>
    </div>
    <div class="mobile">
      <a href="cart.html"
        ><i class="fa-solid fa-cart-shopping">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            /></svg></i
      ></a>
      <i class="fa fa-solid fa-bars"></i>
    </div>
  </section>
</template>

<style scoped>
.header {
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 25px 100px 40px;
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
  padding: 0 25px;
  position: relative;
}

.navbar li a {
  text-decoration: none;
  font-size: 20px;
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
  left: 30px;
}

.mobile {
  display: none;
  align-items: center;
}

#close {
  display: none;
}
</style>
