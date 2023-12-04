<template>

	<div class="product-detail__container">
		<h1 class="product-detail__title">{{ product.title }}</h1>
		<div class="product-detail__wrapper">
			<div class="product-detail__swiper">
				<swiper
					:spaceBetween="20"
					:navigation="false"
					:modules="[Thumbs]"
					:autoHeight="true"
					:speed="500"
					:thumbs="{ swiper: thumbsSwiper }"
					class="mySwiper2"
				>
					<swiper-slide class="main-swiper__silde" v-for="photo in product.photos"><img :src="getImgUrl(photo.img)" /></swiper-slide>

				</swiper>
				<swiper
					:modules="[Thumbs]"
					:slidesPerView="3"
					:spaceBetween="10"
					watch-slides-progress
					@swiper="setThumbsSwiper"
					:breakpoints="{
				}"
				>
					<swiper-slide class="slide__thumb" v-for="photo in product.photos"><img :src="getImgUrl(photo.img)" /></swiper-slide>
				</swiper>
			</div>
			<div class="product-detail__list">
				<ul v-if="product.characteristics" class="product-detail__characteristics">
					<li v-for="characteristic in product.characteristics" class="product-detail__characteristics_item"> {{ characteristic.title }} : {{ characteristic.value }}</li>
				</ul>
			</div>
		</div>
		<div v-if="product.description" class="product-detail__descriprion">{{ product.description }}</div>
	</div>

</template>

<script>
// import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import { mapActions } from 'pinia';
import { useProductsStore } from '../store/productsStore'

import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
// import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import './style.css';
import { ref } from 'vue';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
	export default {
		components: {
			Swiper,
			SwiperSlide,
		},
		setup() {
			const thumbsSwiper = ref(null);
			const setThumbsSwiper = (swiper) => {
				thumbsSwiper.value = swiper;
			};
			return {
				Thumbs,
				thumbsSwiper,
				setThumbsSwiper,
			};
		},
		data() {
			return {
				product: {}
			}
		},
		methods:{
			...mapActions(useProductsStore, {
				getProduct: 'getProductById',
			}),
			getImgUrl(pic) {
				return require('../assets/vegetables/' + pic);
			},
			// product() {
			// 	return this.getProduct(this.productId);
			// },

		},
		mounted(){
			console.log(this.productId);
			console.log(this.getProduct(this.productId));
			this.getProduct(this.productId)
			this.product = this.getProduct(this.productId)
		},
		computed: {
			// ...mapGetters({
			// 	getProductById: 'products/getProductById',
			// }),
			productId() {
				return +this.$route.params.id;
			},
		},
		watch:{
			//TODO сделай просмотр id и при его смене переинициализируй продукт
		}

	}
</script>

<style lang="scss" scoped>
	.swiper-watch-progress{
		overflow: hidden;
		border-radius: 5px;
	}

	.slide{
		&__thumb{
			height: 100px;
			border: 1px solid #e0e0e0;

			img{
				transition: all 0.3s ease 0s;
				opacity: 0.6;
				max-height: 100%;
				height: 100%;
				border-radius: 5px;
				width: 100%;
				object-fit: cover;
			}
		}
		@media (max-width: 768px){
			&__thumb{
				height: 50px;
			}
		}
	}
	.swiper-slide-thumb-active{
		img{
			opacity: 1;
		}
	}
	.main-swiper__silde{
		img{
			border-radius: 10px;
			max-width: 100%;
		}
	}
	.product-detail{
		&__container{
			padding: 0px 10px;


		}
		&__wrapper{
			@media (min-width: 950px){
				margin-top: 20px;
				display: flex;
				gap: 30px;
			}
		}
		&__swiper{
			overflow: hidden;
		}
		&__list{
			flex: 0 0 50%
		}
		&__characteristics{
			padding: 20px 10px 20px 30px;
			list-style-type: disc;
			text-align: left;
			background: #fff;
			border-radius: 10px;
			@media (max-width: 768px){
				margin-top: 20px;

			}
		}
		&__characteristic{
			line-height: 1.5;
			text-align: left;

		}
		&__descriprion{
			line-height: 1.5;
			margin-top: 20px;
			padding: 10px 20px;
			border-radius: 10px;
			background: #fff;
		}
		&__characteristics_item{
			&:not(:first-child){
				margin-top: 10px;
			}
		}
	}
</style>