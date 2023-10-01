<template>
	<div class="products__container">
		<div class="products__wrapper">
			<div class="products__list">
				<product-item v-for="product in products" :product="product"/>
			</div>
		</div>
	</div>
</template>

<script>
import ProductItem from './ProductItem.vue';
export default {
	components:{
		ProductItem,
	},
	props: {
		products: {
			type: Array,
			required: true
		}
	},
}
</script>

<style lang="scss">
	.products{
		&__list{
			display: grid; 
			grid-template-columns: 1fr 1fr; 
			grid-template-rows: 1fr 1fr; 
			gap: 10px;
			
		}
	}
</style>