<template>
	<div>
		<div>
			<h1 class="">{{ product.title }}</h1>
			<!-- <img :src="getImgUrl(product.previewImg)" alt="Product Image"> -->
		</div>
		<swiper
			:style="{
			'--swiper-navigation-color': '#000',
			'--swiper-pagination-color': '#000',
			}"
			:spaceBetween="10"
			:navigation="true"
			:modules="modules"
			class="mySwiper2"
		>
			<swiper-slide v-for="photo in product.photos"><img :src="getImgUrl(photo.img)" /></swiper-slide>
  		</swiper>
	</div>
	
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
// import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// import './style.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
	export default {
		components: {
			Swiper,
			SwiperSlide,
		},
		setup() {
			return {
				modules: [FreeMode, Navigation],
			};
		},
		methods:{
			getImgUrl(pic) {
				return require('../assets/vegetables/' + pic);
			},
		},
		mounted(){
			console.log(this.product);
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