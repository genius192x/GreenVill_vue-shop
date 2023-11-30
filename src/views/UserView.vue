<template>
  <div>
    <p>
      {{ loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in' }}
    </p>

    <form>

      <input type="text" placeholder="Name" v-model="name" />
      <button type="button" @click="login(email, password)">Login</button>
      <button type="button" @click="register">
        Register
      </button>
      <button type="button" @click="logout">
        Logout
      </button>
    </form>
  </div>
	<div class="q-pa-md" style="max-width: 400px">

	<q-form
		@submit="onSubmit"
		@reset="onReset"
		class="q-gutter-md"
	>
		<q-input
			filled
			v-model="email"
			label="Email*"
			hint="Your email"
			lazy-rules
			rules="email"
		/>

		<q-input
			v-model="password"
			filled
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
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 3 || 'Please type something']"
      />
	</q-form>
	<div class="q-pa-md q-gutter-sm">

		<q-btn color="primary" icon="check" @click="logout">logout</q-btn>
		<q-btn color="primary" icon="check" @click="login(email, password)">Login</q-btn>
		<q-btn color="primary" icon="check" @click="register">Register</q-btn>
	</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { account, ID } from '../lib/appwrite.js';

const loggedInUser = ref(null);
const email = ref('');
const password = ref('');
const isPwd = ref(true);
const name = ref('');

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
