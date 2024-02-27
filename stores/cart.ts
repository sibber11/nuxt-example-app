import { defineStore } from 'pinia'
import { type Product } from '~/server/api/products';
type Cart = {
  data: Array<{
    product: Product;
    qty: number;
  }>
};
export const useMyCartStore = defineStore('cartStore', () => {
  const cartCookie = useCookie<Cart>('cart')
  const cart = ref<Cart>(cartCookie.value);

  function add(product: Product | null) {
    if (!product) {
      return;
    }

    if (!cart.value?.data) {
      cart.value = {
        data: []
      }
    }

    const p = cart.value.data.find(p=>p.product.id == product.id);

    if (p) {
      p.qty++;
    } else {
      cart.value.data.push({
        product,
        qty: 1
      });
    }

    const cartCookie = useCookie<Cart>('cart')
    cartCookie.value = cart.value;
  }

  function remove(product: number) {
    const cartCookie = useCookie<Cart>('cart')
    cart.value.data = cart.value.data.filter(p=>p.product.id == product);
    cartCookie.value = cart.value;
  }

  return {
    add, remove, cart
  }
})
