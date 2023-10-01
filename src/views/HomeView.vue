<template>
  <div class="home">
	<section class="banners">
		<BannerList :banners="banners"/>
	</section>
	<section class="labels">
		<LabelList :labels="labels"/>
	</section>
	<section class="products">
		<ProductList :products="products"/>
	</section>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerList from '@/components/BannerList.vue'
import LabelList from '@/components/LabelList.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import ProductList from '@/components/ProductList.vue'
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
	name: 'HomeView',
	components:{
		HelloWorld, BannerList, LabelList, ProductList
	},
	
	computed: {
	  ...mapState({
		products: state => state.products.products,
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
	section{
		padding-block: 10px;
	}
</style>