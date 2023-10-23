import {createStore} from "vuex";
import {bannerModule} from "@/store/bannerModule";
import { labelModule } from "@/store/labelModule";
import { productModule } from '@/store/productModule';
import { cartModule } from "@/store/cartModule";

export default createStore({
    state: {
      isAuth: false,
    },
    modules: {
        banner: bannerModule,
		label: labelModule,
		products: productModule,
		cart: cartModule,
    }
})