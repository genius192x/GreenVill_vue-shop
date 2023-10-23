<template>
	<header class="header">
		<div class="header__wrapper">
			<div class="header__search">
				<MySearch/>
			</div>
			<div class="header__avatar">
				<img src="../assets/avatars/1.png" alt="">
			</div>
		</div>
	</header>
</template>

<script>

import MyButton from '@/components/UI/MyButton'
import MyInput from '@/components/UI/MyInput'
import MySearch from '@/components/UI/MySearch'
	export default {
		components: {
			MyButton,
			MyInput,
			MySearch
		},
		
		data(){
			return{
			}
		},
		methods:{
		},
		mounted(){

		}
	}
</script>

<style lang="scss">
	.header{
		padding: 20px 15px 5px 15px;
		&__avatar{
			max-height: 50px;
			max-width: 50px;
			img{
				// border: 5px solid #fff;
				border-radius: 50%;
				max-width: 100%;
			}
		}
		
		&__wrapper{
			align-items: center;
			display: flex;
			justify-content: flex-end;
			gap: 40px;
			// box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
			padding: 10px 10px;
			border-radius: 10px;
			// background: #fff;
		}
		&__search{
			width: 100%;
		}
		@media (max-width: 768px){
			&__avatar{
				max-height: 45px;
				max-width: 45px;
				img{
					// border: 5px solid #fff;
					border-radius: 50%;
					max-width: 100%;
				}
			}
		}
	}
	.form{
		&__input{
			width: 100%;
		}
		&__icon{
			height: 24px;
		}
		&__field{
			// background: #fff;
			// border: 1px solid rgb(185, 185, 185);
			border-radius: 50%;
			padding: 5px 0px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			width: 46px;
			// border-bottom: 1px solid #8f8f8f;
			transition: width 0.5s ease 0s;
			max-width: 400px;
			.form__input{
				border-bottom: 1px solid black;
				width: 0;
				padding: 5px 0px;
				transition: all 0.5s ease 0s;
				
			}
			&.active{
				justify-content: flex-end;
				border-radius: 5px;
				padding: 5px 10px;
				transition: width 0.5s ease 0s;
				.form__input{
					transition: all 0.1s ease 0s;
					padding: 5px 10px;
					width: 100%;
				}
			}
		}
	}
</style>