import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const cartItems = computed(() => cart.value.length);
  function addItemToCart(val) {
    let ind = cart.value.findIndex(
      (e) => e.id === val.id && e.size === val.size
    );
    if (ind === -1) {
      cart.value.push(val);
    } else {
      cart.value[ind].quantity = cart.value[ind].quantity + val.quantity;
    }
    //keche imena uklevesi arakaci xar prosta mezizghebi
  }

  return { cart, cartItems, addItemToCart };
});
