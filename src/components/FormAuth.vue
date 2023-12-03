<template>
	<div>
    <p>
      {{ loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in' }}
    </p>
  </div>
	<div class="q-pa-md" style="max-width: 400px">

	<q-form
		class="q-gutter-md"
	>
		<q-input
			filled
			v-model="email"
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
        v-model="name"
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
		<q-btn color="secondary" @click="login(email, password)" label="Login" />
		<q-btn color="primary" icon="check" @click="logout">logout</q-btn>
	</div>

	<q-btn color="primary" icon="check" @click="register" v-if="isRegister">Register</q-btn>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { account, ID } from '../lib/appwrite.js';
import { useInitStore } from '@/store/initStore';


const loggedInUser = ref(null);
const email = ref('');
const password = ref('');
const isPwd = ref(true);
const name = ref('');

const isRegister = ref(false)
const useInit = useInitStore()


const login = async (email, password) => {
  await account.createEmailSession(email, password);
  loggedInUser.value = await account.get();
};

const register = async () => {
  await account.create(ID.unique(), email.value, password.value, name.value);
  login(email.value, password.value);
};

const logout = async () => {
  await account.deleteSession('current');
  loggedInUser.value = null;
};
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
</style>