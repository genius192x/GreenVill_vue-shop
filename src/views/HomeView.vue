<template>
  <div class="home">
	<BannerList :banners="banners"/>
	<LabelList :labels="labels"/>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerList from '@/components/BannerList.vue'
import LabelList from '@/components/LabelList.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
	name: 'HomeView',
	components:{
		HelloWorld, BannerList, LabelList,
	},
	
	computed: {
	  ...mapState({
		banners: state => state.banner.banners,
		labels: state => state.label.labels,
	  }),
	},
	mounted(){
		// console.log(this.banners);
	},
	

	
}
</script>
<style lang="scss">
	.home{
		padding: 0px 10px;
	}
</style>