import { defineStore } from 'pinia'
import { ID } from "appwrite";
import { Account } from "appwrite";

export const useInitStore = defineStore('initStore', {
  state: () => ({
		isLogin: false,
		email: '',
		name: '',
		current: null,
  }),

  actions: {
		async init() {
			console.log('init');
			try {
				this.current = await account.get();
			} catch (e) {
				this.current = null;
			}
		},
		clearProfile(){
			this.isLogin = false,
			this.email = '',
			this.name = ''
		}
  }
})
