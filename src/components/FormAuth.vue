<template>
	<div class="q-pa-md form__wrapper" style="max-width: 400px">
		<q-inner-loading
			:showing="isLogining"
			color="primary"
			class="loader"
		/>
		<q-form
			class="q-gutter-md"
		>

			<q-input
				filled
				v-model="emailField"
				label="Email*"
				hint="Your email"
				lazy-rules
				type="email"
			/>

			<q-input
				v-model="password"
				filled
				label="Password *"
				:type="isPwd ? 'password' : 'text'"
				hint="Password with toggle"
				:rules="[ val => val.length > 8 || '8 char min']">
				<template v-slot:append>
					<q-icon
						:name="isPwd ? 'visibility_off' : 'visibility'"
						class="cursor-pointer"
						@click="isPwd = !isPwd"
					/>
				</template>
			</q-input>
			<q-input
					v-if="isRegister"
					filled
					v-model="nameField"
					label="Your name *"
					hint="Name and surname"
					lazy-rules
					:rules="[ val => val && val.length > 3 || 'Please type something']"
				/>
		</q-form>
		<div class="tippy">
			<p v-if="!isRegister">еще нет аккаунта? <span class="link" @click="isRegister = !isRegister">Создать</span></p>
			<p v-if="isRegister">уже есть аккаунт? <span class="link" @click="isRegister = !isRegister">Авторизоваться</span></p>
		</div>
		<div class=" q-gutter-sm" v-if="!isRegister">
			<q-btn color="secondary" @click="login" label="Login" />
		</div>
		<q-btn color="primary" @click="register" v-if="isRegister">Register</q-btn>
	</div>
</template>

<script>
import { account, ID } from '../lib/appwrite.js';
import { useInitStore } from '@/store/initStore';
import { mapWritableState } from 'pinia'

export default {
	data() {
		return {
			loggedInUser: null,
			isLogining: false,
			emailField: '',
			password: '',
			isPwd: true,
			nameField: '',
			isRegister: false,
		}
	},
	mounted(){
		this.autoLogin()
	},
	computed:{
		...mapWritableState(useInitStore,['isLogin', 'name', 'email'])
	},
	methods:{
		async login(){
			this.isLogining = true
			await account.createEmailSession(this.emailField, this.password);
			this.loggedInUser = await account.get();
			if(this.loggedInUser){
				this.setLoginInfo()
				this.isLogining = false
			}
		},
		async register(){
			this.isLogining = true
			await account.create(ID.unique(), this.emailField, this.password, this.nameField);
			this.login(this.emailField, this.password);
		},
		setLoginInfo(){
			this.name = this.loggedInUser.name,
			this.email = this.loggedInUser.email,
			this.isLogin = true
		},
		async autoLogin(){
			try{
				const user = await account.get()
				if(user){
					this.isLogin = true,
					this.email = user.email,
					this.name = user.name
					this.loggedInUser = user
				}
			} catch (error) {
				this.isLogin = false,
				this.name = '',
				this.email = ''
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.link{
	color: $primary;
	text-decoration: underline;
	cursor: pointer;
}
.tippy{
	margin: 20px 0px;
}
.form{
	&__wrapper{
		position: relative;
	}

}
.loader{
	z-index: 100;
}
</style>