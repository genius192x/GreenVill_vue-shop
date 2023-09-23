<template>
  <div class="home">
	<BannerList :banners="banners"/>
	
  </div>
</template>

<script>
// @ is an alias to /src
import BannerList from '@/components/BannerList.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
	name: 'HomeView',
	components:{
		HelloWorld, BannerList, 
	},
	
	computed: {
	  ...mapState({
		banners: state => state.banner.banners,
	  }),
	},
	mounted(){
		console.log(this.banners);
	},
	

	
}
</script>
<style lang="scss">
	.home{
		padding: 0px 10px;
	}
</style>