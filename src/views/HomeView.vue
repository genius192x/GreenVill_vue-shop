<template>
  <div class="home">
		<section class="banners">
			<BannerList :banners="bannerList"/>
		</section>
		<section class="labels">
			<LabelList :labels="labelList"/>
		</section>
		<section class="products">
			<ProductList :products="productsList"/>
		</section>
  </div>
</template>

<script>
// @ is an alias to /src
import { useBannersStore } from '../store/bannerStore'
import {useLabelStore} from '../store/labelStore'
import { useProductsStore } from '../store/productsStore'
import BannerList from '@/components/BannerList.vue'
import LabelList from '@/components/LabelList.vue'
import ProductList from '@/components/ProductList.vue'
import { mapState } from 'pinia'
export default {
	name: 'HomeView',
	components:{
		BannerList, LabelList, ProductList,
	},

	computed: {
		...mapState(useBannersStore, { bannerList: 'banners'}),
		...mapState(useLabelStore, { labelList: 'labels'}),
		...mapState(useProductsStore, { productsList: 'products'}),

	},
	mounted(){
		// console.log(this.bannerList);
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