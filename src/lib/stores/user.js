import { ID } from "appwrite";
import { Account } from "appwrite";
import { reactive } from "vue";

export const user = reactive({
  current: null,
  async init() {
    try {
      this.current = await Account.get();
    } catch (e) {
      this.current = null;
    }
  },
  async register(email, password) {
    await Account.create(ID.unique(), email, password);
    await this.login(email, password);
  },
  async login(email, password) {
    await Account.createEmailSession(email, password);
    window.location.href = "/"; // Redirect to home page
  },
  async logout() {
    await Account.deleteSession("current");
    this.current = null;
  },
});

