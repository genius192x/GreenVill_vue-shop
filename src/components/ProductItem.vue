<template>
	<a @click="$router.push(`/shop/${product.id}`)" class="product__wrapper">
		<div class="product__illustration">
			<img class="product__image" :src="getImgUrl(product.previewImg)" alt="">
		</div>
		<div class="product__content">
			<span class="product__title">{{ product.title }}</span>
			<div class="product__prices">
				<span class="product__cur-price"> ${{ product.price }}</span>
				<span class="product__old-price">${{ product.oldPrice }}</span>
			</div>
			<button @click.stop="console.log('awdaw')" class="product__button"> + </button>
		</div>
	</a>
</template>

<script>
	export default {
		// mounted(){
		// 	console.log(this.product);
		// },
		props: {
			product:{
				type: Object,
				required: true,
			}
		},
		methods:{
			getImgUrl(pic) {
				return require('../assets/vegetables/' + pic);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.product{
		&__wrapper{
			display: block;
			text-decoration: none;
			background: #FFFBE2;
			width: 100%;
			height: 210px;
			padding: 13px 7px 7px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			border-radius: 10px;
		}
		&__illustration{
			max-width: 124px;
			height: 100px;
		}
		&__image{
			max-width: 100%;
			height: 100%;
		}
		&__title,
		&__cur-price{
			color: #0E3459;
			font-family: sans-serif;
			font-size: 20px;
			font-style: normal;
			font-weight: 600;
			line-height: 100%; /* 20px */
		}
		&__content{
			padding: 10px;
			width: 100%;
			border-radius: 5px;
			position: relative;
			background: rgba(255, 255, 255, 0.70);
		}
		&__old-price{
			margin-left: 5px;
			color: #B5BECA;
			font-family: sans-serif;
			font-size: 14px;
			font-style: normal;
			font-weight: 600;
			line-height: 100%; /* 14px */
			text-decoration: line-through;
		}
		&__button{
			width: 30px;
			color: #0E3459;
			height: 30px;
			font-size: 20px;
			position: absolute;
			bottom: 0;
			right: 0;
			border-radius: 5px 0px;
			background-color: #59E39F;
		}
	}
</style>