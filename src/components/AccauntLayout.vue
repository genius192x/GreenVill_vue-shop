<template>
	<div class="accaunt">
		<div class="accaunt__wrapper">
			<div class="accaunt__info">
				<div class="accaunt__avatar">
					<img src="@/assets/avatars/1.png" alt="avatar">
				</div>
				<div class="accaunt__fields">
					<h3 class="accaunt__name">{{ name }}</h3>
					<span class="accaunt__email">{{ email }}</span>
				</div>
			</div>
			<div class="accaunt__cards">
				<div class="accaunt__card">
					<div class="card">
						<span class="card__title">
							Бонусы
						</span>
						<p class="card__value card__value_style_primary">
							0
						</p>
					</div>
				</div>
				<div class="accaunt__card">
					<div class="card">
						<span class="card__title">
							Сумма в корзине
						</span>
						<p class="card__value">
							0$
						</p>
					</div>
				</div>
			</div>
		</div>
		<q-btn color="primary" label="logout" @click="logout" />
	</div>
</template>

<script>
import { account } from '@/lib/appwrite';
import { useInitStore } from '@/store/initStore';
import { mapWritableState, mapActions } from 'pinia';
	export default {
		data() {
			return {

			}
		},
		computed:{
			...mapWritableState(useInitStore, ['name','email','isLogin'])
		},
		methods:{
			...mapActions(useInitStore, ['clearProfile']),
			async logout(){
				await account.deleteSession('current'),
				this.email = '',
				this.isLogin = false,
				this.name = ''
			}
		}
	}
</script>

<style lang="scss" >
.accaunt{
	&__wrapper{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	&__cards{
		display: flex;
		gap: 30px;

	}
	&__card{
		background: #e7e7e7;
		border-radius: 20px;
		min-width: 150px;
		padding: 20px;
		box-shadow: 0 5px 10px 0 rgba(0,0,0,0.2);
	}
	&__info{
		display: flex;
		align-items: center;
		gap: 20px;
	}
	&__email{
		font-size: 20px;
	}
	&__avatar{
		max-width: 100px;

		img{
			object-fit: cover;
			max-width: 100%;
		}
	}
}


.card{
	&__title{
		color: #797a80;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.2;
	}
	&__value{
		font-size: 24px;
		&_style{
			&_primary{
				color: #42b983;
			}
		}
	}
}

</style>