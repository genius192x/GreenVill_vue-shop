<template>
	<div>
		<h3> Page +w id: {{ productId }}  </h3>
		<div>
			<p>Product Title: {{ product.title }}</p>
			<img :src="getImgUrl(product.img)" alt="Product Image">
		</div>
	</div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
	export default {
		methods:{
			getImgUrl(pic) {
				return require('../assets/vegetables/' + pic);
			},
		},
		computed: {
			...mapGetters({
				getProductById: 'banner/getProductById',
			}),
			productId() {
				return +this.$route.params.id;
			},
			product() {
				return this.getProductById(this.productId);
			}
		}
		
	}
</script>

<style lang="scss" scoped>

</style>