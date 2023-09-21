import {createStore} from "vuex";
import {bannerModule} from "@/store/bannerModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        banner: bannerModule
    }
})