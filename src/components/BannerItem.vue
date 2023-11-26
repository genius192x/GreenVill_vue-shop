<template>
	<div class="banner">
		<div class="banner__content">
			<div class="banner__text">
				<small class="banner__badge">{{ banner.badge }}</small>
				<h3 class="banner__title">{{ banner.promoTitle }}</h3>
				<div class="banner__buttons">
					<my-button @click="$router.push(`/shop/${banner.id}`)" >Shop Now</my-button>
				</div>
			</div>
			<div class="banner__illustration">
				<img class="banner__image" :src="getImgUrl(banner.previewImg)" alt="img"/>
			</div>
		</div>

	</div>
</template>

<script>
import MyButton from '@/components/UI/MyButton';
export default {
	components: {MyButton},
	props: {
		banner:{
			type: Object,
			required: true,
		}
	},
	// mounted(){
	// 	console.log(banner);
	// },
	methods:{
		getImgUrl(pic) {
			return require('../assets/vegetables/' + pic);
		},
	}
}
</script>

<style lang="scss" scoped>
	.banner{
		height: 100%;
		background: #F1F4DF;
		padding: 15px;
		border-radius: 25px;
		&__content{
			text-align: left;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		// &__image{
		// 	min-height: 162px;
		// }
		&__text{
			flex: 0 0 55%,
		}
		&__link{
			color: #55E29E;
			font-weight: 500;
			text-decoration: none;
		}
		&__title{
			font-size: 22px;
			font-weight: 600;
		}
		@media (min-width: 768px){
			  font-size: 28px;
		}
		&__buttons{
			margin-top: 20px;
		}
		&__illustration{
			max-width: 100%;

			img{
				max-width: 100%;
				object-fit: cover;
			}
		}
	}
</style>