<template>
	<CartItem :item="cartItem"/>
</template>

<script>
import CartItem	from '@/components/CartItem.vue'
	export default {
		components:{
			CartItem,
		},
		mounted(){
		},
		computed: {
		},
	}
</script>

<style lang="scss" scoped>

</style>