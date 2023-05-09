import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import AboutView from "../views/AboutView.vue";
import SingleProduct from "../components/SingleProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/product/:id",
      name: "product",
      component: SingleProduct,
    },
  ],
});

export default router;
