import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Contact from "../components/Landingview/Contact.vue";
import Cart from "../components/Landingview/Cart.vue";
import SingleProduct from "../components/Landingview/SingleProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },
    {
      path: "/product/:id",
      name: "product",
      component: SingleProduct,
    },
  ],
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
