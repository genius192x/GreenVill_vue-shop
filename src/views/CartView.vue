<template>
	<CartItem :item="cartItem"/>
	<q-btn color="primary" label="clear cart" @click="clear" />
</template>

<script>
import {useCartsStore} from '@/store/cartStore.js'
import { mapState, mapActions } from 'pinia'
import CartItem	from '@/components/CartItem.vue'
	export default {
		components:{
			CartItem,
		},
		mounted(){
		},
		methods:{
			...mapActions(useCartsStore, ['clearCart']),
			clear(){
				console.log('wadwa');
				this.clearCart()
			}
		},
		computed: {
		},
	}
</script>

<style lang="scss" scoped>

</style>