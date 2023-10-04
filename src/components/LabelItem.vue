<template>
	<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="label__wrapper">
		<div class="label__illustration">
			<img class="labelr__image" :src="getImgUrl(label.img)" alt="img"/>
		</div>
		<div class="label__title">{{ label.title }}</div>
	</a>
</template>

<script>
	export default {
		// mounted(){
		// 	console.log(this.label);
		// },
		methods:{
			getImgUrl(pic) {
				return require('../assets/labels/' + pic);
			},
		},
		props: {
			label:{
				type: Object,
				required: true,
			}
		},
	}
</script>

<style lang="scss" >
	.label{
		&__wrapper{
			text-decoration: none;
			display: flex;
			flex-direction: column;
		}
		&__title{
			text-decoration: none;
			color: black;
			font-weight: 500;
			font-size: 18px;
			text-align: center;
		}
	}
</style>