<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useCartStore } from "../stores/cart";
import { ref } from "vue";

const { cartItems } = storeToRefs(useCartStore());

const navbar = ref(null);

const toggleNav = () => {
  if (navbar.value) {
    navbar.value.classList.toggle("active");
  }
  console.log(navbar.classList);
};
</script>

<template>
  <section class="header">
    <RouterLink to="/"
      ><img src="@/../public/img/logo.png" alt=""
    /></RouterLink>
    <div>
      <ul class="navbar" ref="navbar">
        <li>
          <RouterLink activeClass="active" to="/" @click="toggleNav"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink activeClass="active" to="/about" @click="toggleNav"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink activeClass="active" to="/contact" @click="toggleNav"
            >Contact</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              class="bi bi-cart-fill"
              viewBox="0 0 16 16"
              activeClass="active"
            >
              <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
              />
            </svg>
          </RouterLink>
          <span class="cart-index">{{ cartItems }}</span>
        </li>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          class="icon close"
          @click="toggleNav"
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </ul>
    </div>
    <div class="mobile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="icon"
        @click="toggleNav"
      >
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.header {
  display: flex;
  text-align: center;
  justify-content: space-between;
  padding: 25px 100px 20px;
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
  font-size: 16px;
  font-weight: 600;
  color: #1a1a1a;
  transition: 0.3s ease;
}

.navbar li a:hover,
.navbar li a.active {
  color: #088178;
}

.mobile {
  display: none;
  align-items: center;
}

.close {
  display: none;
}

.cart-index {
  color: #088178;
}

@media (max-width: 799px) {
  .icon {
    width: 24px;
    height: 24px;
  }
  .navbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: -300px;
    height: 100vh;
    width: 300px;
    background-color: #e3e6f3;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    padding: 80px 0 0 10px;
    transition: 0.3s;
  }

  .navbar.active {
    right: 0;
  }

  .navbar li {
    margin-bottom: 25px;
  }

  .mobile {
    display: flex;
    align-items: center;
  }

  .close {
    display: initial;
    position: absolute;
    top: 30px;
    left: 30px;
    color: #222;
    font-size: 24px;
  }
}
</style>
