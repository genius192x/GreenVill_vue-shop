import { createApp } from 'vue'
import App from './App.vue'
import Mycomponents from './components/UI'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import store from './store'

const vuetify = createVuetify({
	components,
	directives,
})

const app = createApp(App)

Mycomponents.forEach(component => {
	app.component(component.name, component)
})

app
.use(router)
.use(store)
.mount('#app')

