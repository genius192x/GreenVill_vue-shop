<template>
	<div class="cart__wrapper">
		<div class="cart__list">
			<div class="cart__item" >
				<product-item v-for="product in products" :product="product"/>
				<!-- <CartItem :item="cartItem"/> -->
			</div>
		</div>
	</div>
	<q-btn color="primary" label="clear cart" @click="clear" />
</template>

<script>
import ProductItem from '@/components/ProductItem.vue'
import {useCartsStore} from '@/store/cartStore.js'
import { mapState, mapActions } from 'pinia'
import CartItem	from '@/components/CartItem.vue'
	export default {
		components:{
			CartItem,
			ProductItem
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
			...mapState(useCartsStore, ['products'])
		},
	}
</script>

<style lang="scss" scoped>

</style>