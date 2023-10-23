<template>
	<CartItem :item="cartItem"/>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import CartItem	from '@/components/CartItem.vue'
	export default {
		components:{
			CartItem,
		},
		mounted(){
			console.log(this.cartItem);
		},
		computed: {
			...mapState({
				cartItem: state => state.cart.items,
			}),
		},
	}
</script>

<style lang="scss" scoped>

</style>