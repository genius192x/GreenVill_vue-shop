<template>
	<a @click="$router.push(`/shop/${product.id}`)" class="product__wrapper" :class="{ product__wrapper_role_cart: role === 'cart' }">
		<div class="product__illustration">
			<img class="product__image" :src="getImgUrl(product.previewImg)" alt="">
		</div>
		<div class="product__description" v-if="role === 'cart'">
			<div class="product__text">{{ product.description }}</div>

		</div>
		<div class="product__content">
			<span class="product__title">{{ product.title }}</span>
			<div class="product__prices">
				<span class="product__cur-price"> ${{ product.price }}</span>
				<span class="product__old-price">${{ product.oldPrice }}</span>
			</div>
			<div class="product__picker">
				<my-picker @some-event="addToCart" @delete-event="deleteElem" :curValue="getCurValue()" :id="this.product.id"></my-picker>
			</div>
		</div>
	</a>
</template>

<script>
import MyPicker from '@/components/UI/MyPicker.vue'
import { useQuasar } from 'quasar'
import {useCartsStore} from '@/store/cartStore.js'
import { mapState, mapActions } from 'pinia'
import { ref } from 'vue'
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
				$q.notify({
					message: 'Товар добавлен в корзину' ,
					color: 'secondary'
				})
			}
		}
	},
	data(){
		return{
			newProduct: null,
			isDel: ref(true),
		}
	},

	props: {
		product:{
			type: Object,
		},
		role: {
			type: String,
		},
	},
	mounted(){
		if(this.getCurValue()){
			const picker = this.$el;
			picker.classList.toggle('state_open')

		}
	},
	computed:{
		...mapState(useCartsStore, ['products'])
	},
	watch:{
		products:{
			handler(val) {
			},
			deep: true
		}
	},
	methods:{
		getCurValue(){
			if(this.getProductById(this.product.id)){
				return this.getProductById(this.product.id).weight
			}
		},
		addToCart(n){
			if(this.isDel !==null){
				if(this.getProductById(this.product.id)){
					this.getProductById(this.product.id).weight= n
				}else{
					this.newProduct = {
						id: this.product.id,
						title: this.product.title,
						price: this.product.price,
						previewImg: this.product.previewImg,
						weight: n,
						oldPrice: this.product.oldPrice,
						description: this.product.description
					},
					this.addProduct(this.newProduct)
				}
				localStorage.setItem('products',JSON.stringify(this.products));
			}else{
				this.isDel = true
			}
		},
		deleteElem(n){
			this.isDel = n
			this.deleteElement(this.product.id)

		},
		setState(){
			let cardWrapper = event.target.closest('.product__wrapper');
			cardWrapper.classList.toggle('state_open');

		},
		getImgUrl(pic) {
			return require('../assets/vegetables/' + pic);
		},
		...mapActions(useCartsStore, ['getProductById', 'addProduct', 'deleteElement', 'updateCart'])
	},


}
</script>


<style lang="scss">
	.product{
		&__wrapper{
			text-decoration: none;
			background: #FFFBE2;
			width: 100%;
			height: 269px;
			overflow: hidden;
			padding: 13px 7px 7px;
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: 10px;
			transition: all 0.3s ease 0s;

			&_role{
				&_cart{
					flex-direction: row;
					height: fit-content;
					align-items: flex-start;
					gap: 10px;
					@media (max-width: 450px){
						flex-direction: column;
					}
					&__content{
						max-height: 146px;
					}
					&.state_open{
						@media (min-width: 768px){
							.product__content{
								flex: 0 0 35%;
							}
						}
						@media (max-width: 768px){
							.product__content{
								flex: 0 0 35%;
							}
						}
					}
				}
			}

			&.state_open{
				.picker__button_role_show{
					position: relative;
					top: -40px;
				}
				.picker__wrapper{
					position: relative;
					top: -25px;
				}
				.product__picker{
					// max-height: 70px;
				}
			}
		}
		&__text{
			flex: 1 1  35%;
			overflow: hidden;
      text-overflow: ellipsis;
      display: -moz-box;
      -moz-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      line-clamp: 6;
      box-orient: vertical;
			// padding: 10px;
			border-radius: 5px;
			@media (max-width: 450px){
				-webkit-line-clamp: 4;
			}
		}
		&__description{
			flex: 1 1  35%;
			padding: 10px;
			min-height: 146px;
			background: rgba(255, 255, 255, 0.70);
			@media (max-width: 450px){
				order: 2;
				min-height: auto;
			}
		}
		&__illustration{
			max-width: 124px;
			height: 100px;
			align-self: center;
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