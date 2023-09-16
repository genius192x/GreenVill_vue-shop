<template>
	<div class="banner">
		<div class="banner__content">
			<div class="banner__text">
				<small class="banner__badge">{{ banner.badge }}</small>
				<h3 class="banner__title">{{ banner.title }}</h3>
				<div class="banner__buttons">
					<my-button href="{{ banner.link }}">Shop Now</my-button>
				</div>
			</div>
			<div class="banner__illustration">
				<img src="@/assets/vegetables/1.png" alt="">
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
	}
}
</script>

<style lang="scss" scoped>
	.banner{
		background: #F1F4DF;
		padding: 15px;
		border-radius: 25px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		&__content{
			text-align: left;
			display: flex;
			align-items: center;
			gap: 15px;
		}
		&__text{
			flex: 0 0 60%,
		}
		&__title{
			font-size: 26px;
			font-weight: 600;	
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