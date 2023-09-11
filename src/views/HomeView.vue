<template>
  <div class="home">
    <HelloWorld msg="Welcome to My app"/>
	<BannerList/>

	
  </div>
</template>

<script>
// @ is an alias to /src
import BannerList from '@/components/BannerList.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
	name: 'HomeView',
	components:{
		HelloWorld, BannerList, Swiper, SwiperSlide,
	},
	
	
	
}
</script>
