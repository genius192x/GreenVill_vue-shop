<template>
	<div  v-if="banners.length > 0"  >
		<h3>Sales!</h3>
		<swiper
			:slides-per-view="2"
			:space-between="30"
			@swiper="onSwiper"
			@slideChange="onSlideChange" class="banner-list">
			<swiper-slide  v-for="banner in banners">{{ banner.title }}</swiper-slide>
		</swiper>
	</div>
</template>

<script>
import BannerItem from './BannerItem.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
export default {
	components: { BannerItem,Swiper, SwiperSlide, },
	// props: {
	// 	banners: {
	// 		type: Array,
	// 		required: true
	// 	}
	// },
	setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
	data(){
		return{
			banners:[
				{
					id:1,
					title: 'text',
					link: '#'
				},
				{
					id:2,
					title: 'text',
					link: '#'
				},
			]
		}
	},
}
</script>

<style lang="scss" scoped>

</style>