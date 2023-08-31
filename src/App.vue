<template>
  <div class="wrapper">
		<navbar class="nav"></navbar>
		<div class="main">
			
			<router-view v-slot="{ Component, route }">
				<!-- Use any custom transition and  to `fade` -->
				<transition name="fade">
					<component :is="Component" />
				</transition>
			</router-view>

		</div>
	</div>
</template>

<script>

import Navbar from '@/components/Navbar'
export default {
	components:{
		Navbar
	}
}

</script>

<style lang="scss">
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
	display: flex;
	min-height: 100vh;
}
.main{
	flex: 1 1 auto;
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
</style>
