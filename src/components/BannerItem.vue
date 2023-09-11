<template>
	<div class="banner">
		<div>
			<!-- <small class="banner__badge">{{ banner.badge }}</small> -->
			<h3 class="banner__title">{{ banner.title }}</h3>
		</div>
		<div class="banner__buttons">
			<my-button href={{ banner.link }}>Shop Now</my-button>
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

</style>