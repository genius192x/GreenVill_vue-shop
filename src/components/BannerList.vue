<template>
	<div class="section__banner-list"  v-if="banners.length > 0"  >
		<!-- <h3 class="section__title">Sales!</h3> -->
		<swiper
			:slides-per-view="1"
			:space-between="30"
			:loop="true"
			:mousewheel="true"
			:pagination="{ clickable: true }"
			:speed="500"
			:modules="modules"
			:breakpoints="{
				'640': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'769': {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				'940': {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				'1440': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			}"
			@swiper="onSwiper"
			@slideChange="onSlideChange" class="banner-list">
			<swiper-slide  v-for="banner in banners"><BannerItem :banner="banner"/></swiper-slide>
		</swiper>
	</div>
</template>

<script>
import BannerItem from './BannerItem.vue';
import { Swiper, SwiperSlide, } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/css/pagination';
export default {
	components: { BannerItem,Swiper, SwiperSlide, },
	props: {
		banners: {
			type: Array,
			required: true
		}
	},
	setup() {
      const onSwiper = (swiper) => {
        // console.log(swiper);
      };
      const onSlideChange = () => {
        // console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
		modules: [Pagination],
      };
    },
	mounted(){
		
	}
}
</script>

<style lang="scss">
	.section{
		&__title{
			font-size: 24px;
			text-align: left;
			line-height: 1.5;
		}
	}
	.swiper-slide{
		height: 100%;
	}
	.swiper-pagination-bullet-active{
		width: 30px;
		transition: all 0.3s ease 0s;
		border-radius: 5px;
		background: #0E3459;
	}
	.swiper-pagination-bullet{
		transition: all 0.5s ease 0s;
	}
	.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
		bottom: -25px;
		left: 0;
		width: 100%;
	}
	.swiper {
		margin-left: auto;
		margin-right: auto;
		position: relative;
		overflow: visible;
		/* overflow: clip; */
		list-style: none;
		padding: 0;
		z-index: 1;
		display: block;
	}
	// .swiper{
	// 	max-width: 100%;
	// }
	// .swiper-slide{
	// 	max-width: fit-content;
	// }
</style>