import { defineStore } from 'pinia'
import { provide } from 'vue';

export const useCartsStore = defineStore('cartStore', {
  state: () => ({
    products:[],
  }),
  actions: {
    getProductById(id){
			return this.products.find(product => product.id === id);
		},
		clearCart(){
			localStorage.removeItem('products')
			this.products=[],
			console.log('awdaw');

		},
		addProduct(product){
			this.products.push(product),
			console.log(this.products);
		},
		updateCart(){
			this.products = JSON.parse(localStorage.getItem("products") || "[]");
		},
		deleteElement(id){
			this.products = this.products.filter(el => el.id !== id)
			localStorage.setItem('products',JSON.stringify(this.products));
		}
  }
})