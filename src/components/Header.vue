<template>
	<header class="header">
		<div class="header__wrapper">
			<div class="header__search">
				<form method="get" class="form">
					<div class="form__field">
						<my-input placeholder="I search..." class="form__input" ></my-input>
						<div class="form__icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M15.7071 14.2929C15.3166 13.9024 14.6834 13.9024 14.2929 14.2929C13.9024 14.6834 13.9024 15.3166 14.2929 15.7071L15.7071 14.2929ZM20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L20.2929 21.7071ZM10 16C6.68629 16 4 13.3137 4 10H2C2 14.4183 5.58172 18 10 18V16ZM4 10C4 6.68629 6.68629 4 10 4V2C5.58172 2 2 5.58172 2 10H4ZM10 4C13.3137 4 16 6.68629 16 10H18C18 5.58172 14.4183 2 10 2V4ZM16 10C16 13.3137 13.3137 16 10 16V18C14.4183 18 18 14.4183 18 10H16ZM14.2929 15.7071L20.2929 21.7071L21.7071 20.2929L15.7071 14.2929L14.2929 15.7071Z" fill="black"/>
							</svg>
						</div>
					</div>
				</form>
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
	export default {
		components: {
			MyButton,
			MyInput
		},
		methods:{
		},
		mounted(){
			function removeInputActive() {
				const header = document.querySelector('.header__search');
				const field = header.querySelector('.form__field');
				field.classList.remove('active')
				field.style.width='46px'
			}
			function changeForm (event){
				const field = event.target.closest('.form__field');
					if (field){
						let maxWidth = field.parentNode.scrollWidth;
						if (!field.classList.contains('active')){
							field.classList.add('active')
							field.style.width = `${maxWidth}px`;
							field.firstChild.focus()
							// field.previousSibling.focus();
						}
					} else {
						removeInputActive()
					}
			}
			document.addEventListener('click', (event)=>{
				changeForm(event)		
			})
			document.addEventListener('scroll', ()=>{
				removeInputActive()	
			})
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