<template>
	<div class="container">
		<div class="cart__wrapper">
			<section class="products">
				<ProductList :products="products" :role="'cart'"/>
			</section>
			<q-btn color="primary" label="clear cart" @click="clear" />
		</div>
	</div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
import {useCartsStore} from '@/store/cartStore.js'
import { useProductsStore } from '../store/productsStore'
import { mapState, mapActions } from 'pinia'
import CartItem	from '@/components/CartItem.vue'
import MyButton from '@/components/UI/MyButton.vue'
import ProductList from '@/components/ProductList.vue'
	export default {
		components:{
    CartItem,
    ProductItem,
		ProductList,
},
		mounted(){
		},
		methods:{
			...mapActions(useCartsStore, ['clearCart']),
			clear(){
				this.clearCart()
			}
		},
		computed: {
			...mapState(useCartsStore, ['products']),
			...mapState(useProductsStore, { productsList: 'products'}),
		},
	}
</script>

<style lang="scss" scoped>

</style>