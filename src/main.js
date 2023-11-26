import { createApp } from 'vue'
import App from './App.vue'
import Mycomponents from './components/UI'
import router from './router'
import 'vuetify/styles'
import SmoothPicker from 'vue-smooth-picker'
import 'vue-smooth-picker/dist/css/style.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { Quasar, Notify } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App)

Mycomponents.forEach(component => {
	app.component(component.name, component)
})

app
.use(router)
.use(pinia)
.use(SmoothPicker)
.use(Quasar, quasarUserOptions, {
	plugins: {
		Notify
	}
})
.mount('#app')

