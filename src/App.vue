<template>
	<div class="wrapper">
		<navbar class="nav"></navbar>
		<div class="main">
			<Header></Header>
			<router-view v-slot="{ Component, route }">
				<!-- Use any custom transition and  to `fade` -->
				<transition name="fade">
					<component :is="Component" />
				</transition>
			</router-view>

		</div>
		<mobile-nav class="nav-mobile"></mobile-nav>
	</div>
</template>

<script>

import Navbar from '@/components/Navbar'
import MobileNav from '@/components/MobileNav.vue'
import Header from './components/Header.vue';
export default {
	components:{
		Navbar,
		MobileNav,
		Header
	}
}

</script>

<style lang="scss">
	html {

		box-sizing: border-box;
		--bgColorMenu : #1d1d27;
		--duration: .7s;    

	}

	html *,
	html *::before,
	html *::after {
		// border: 1px solid black;
		box-sizing: inherit;

	}

	body{
		// overflow: hidden;
		background-color: #edecec;
		-webkit-tap-highlight-color: transparent;
		transition: background-color var(--duration);

	}
	.fade-enter-active,
	.fade-leave-active {
	transition: opacity 0.5s ease;
	}
	.fade-enter-active{
		transition: opacity 0.5s ease 0.5s;
	}
	.fade-enter-from,
	.fade-leave-to {
	opacity: 0;
	}
	*{
		padding: 0;
		margin: 0;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		min-height: 100vh;
	}
	.wrapper{
		overflow-x: hidden;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		min-height: 100dvh;
		// background: #fff;
	}
	.main{
		flex: 0 0 50%;
	}
	.nav-mobile{
		display: none;
	}
	@media screen and (max-width: 768px){
		.wrapper{
			display: flex;
			flex-direction: column;
		}
		.nav-mobile{
			display: flex;
			position: fixed;
			bottom: 0;
		}
	}
	nav {
		padding: 30px;
		
	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
		color: #42b983;
		}
	}
	}
	.v-theme--light {
		color-scheme: normal;
		--v-theme-background: #fafafa !important;
	}

</style>
