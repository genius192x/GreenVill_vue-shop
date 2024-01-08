<template>
	<div class="products__container">
		<div class="products__wrapper">
			<div class="products__list" :class="{ products__list_role_cart: role === 'cart' }">
				<product-item v-for="product in products" :product="product" v-if="role === 'cart'" :role="'cart'"/>
				<product-item v-for="product in products" :product="product" v-else/>
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
		},
		role: {
			type: String,
		},
	},
}
</script>

<style lang="scss">
	.products{
		&__list{
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
			// grid-template-rows: 1fr 1fr;
			gap: 10px;

			&_role{
				&_cart{
					grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
					@media (max-width: 768px){
						grid-template-columns: repeat(1, minmax(155px, 1fr));
					}
				}
			}
		}
	}
</style>