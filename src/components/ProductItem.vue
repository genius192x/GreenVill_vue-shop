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
				<!-- <q-btn color="purple" @click="showNotif" label="Show with caption" /> -->
			<div class="product__picker">
				<my-picker @some-event="test"></my-picker>
			</div>
		</div>
		<!-- <p>currentValue = <strong>{{ currentValue === null ? '(null)' : currentValue }}</strong></p> -->

	</a>
</template>

<script>
import MyPicker from '@/components/UI/MyPicker.vue'
import { useQuasar } from 'quasar'
// import { VueScrollPicker } from 'vue-scroll-picker'
// import "vue-scroll-picker/lib/style.css"
export default {

	components:{
		MyPicker, useQuasar
	},
	setup () {
		const $q = useQuasar()

		return {
			showNotif() {
				console.log('wqwd');
				$q.notify({
					message: 'Товар добавлен в корзину' ,
					color: 'secondary'
				})
			}
		}
	},
	data(){
		return{
			products: [],
			newProduct: null,
		}
	},

	props: {
		product:{
			type: Object,
			required: true,
		}
	},
	mounted(){

	},
	methods:{
		test(n){
			this.newProduct = {
				title: this.product.title,
				price: this.product.price,
				// multiplier: Number(n/1000),
				weight: n,
			},
			this.products.unshift(this.newProduct);
			console.log(this.newProduct);
			this.saveProduct();
			// console.log(n);
		},
		saveProduct(){
			const parsed = JSON.stringify(this.products);
			console.log(parsed);
      		localStorage.setItem('products', parsed);
		},
		setState(){
			let cardWrapper = event.target.closest('.product__wrapper');
			cardWrapper.classList.toggle('state_open');

		},
		getImgUrl(pic) {
			return require('../assets/vegetables/' + pic);
		},
	},


}
</script>


<style lang="scss">
	.product{
		&__wrapper{
			display: block;
			text-decoration: none;
			background: #FFFBE2;
			width: 100%;
			height: 269px;
			overflow: hidden;
			padding: 13px 7px 7px;
			display: flex;
			flex-direction: column;
			align-items: center;
			// justify-content: space-between;
			border-radius: 10px;
			transition: all 0.3s ease 0s;
			&.state_open{
				.picker__button_role_show{
					position: relative;
					top: -40px;
				}
				.picker__wrapper{
					position: relative;
					top: -35px;
				}
				.product__picker{
					// max-height: 70px;
				}
			}
		}
		&__illustration{
			max-width: 124px;
			height: 100px;
			margin-bottom: 5px;
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
			background: rgba(255, 255, 255, 1);
			z-index: 10;
		}
		&__content{
			max-height: 140px;
			overflow: hidden;
			padding: 10px;
			width: 100%;
			border-radius: 5px;
			position: relative;
			display: flex;
			flex-direction: column;
			background: rgba(255, 255, 255, 0.70);
		}
		&__prices{
			z-index: 10;
			background: rgba(255, 255, 255, 1);
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
			// position: absolute;
			bottom: 0;
			right: 0;
			border-radius: 5px 0px;
			background-color: #59E39F;

		}
		&__picker{
			height: 100%;
			width: 100%;
			// max-height: 70px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: relative;
		}
	}
	.plus-icon{
		position: relative;
		width: 100%;
		height: 100%;
		display: block;
		&::after,
		&::before{
			content: '';
			position: absolute;
			top: 50%;
			background: #0E3459;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		&::after{
			width: 1px;
			height: 15px;
			transition: all 0.3s ease 0s;
		}
		&::before{
			width: 15px;
			height: 1px;
		}
	}

	.vue-scroll-picker-layer-top {
		box-sizing: border-box;
		border-bottom: 1px solid #c8c7cc;
		transition: all 0.3s ease 0s;
		background: none;
		top: 0;
		height: calc(50% - 1em);
		cursor: pointer;
	}
	.vue-scroll-picker-layer-bottom {
		border-top: 1px solid #c8c7cc;
		background: none;
		bottom: 0;
		height: calc(50% - 1em);
		cursor: pointer;
	}
	.vue-scroll-picker-item {
		text-align: center;
		line-height: 1.7em;
		font-weight: 600;
		color: #bebebe;
		transition: all 0.2s ease 0s;
	}
	.vue-scroll-picker-item-selected {
		color: #333;
		font-weight: 600;
	}
	.vue-scroll-picker-layer-selection {
		top: calc(50% - 1em);
		bottom: calc(50% - 1em);
	}
	.vue-scroll-picker {
		position: relative;
		flex: 1 1 auto;
		height: 5em;
		overflow: hidden;
	}
</style>