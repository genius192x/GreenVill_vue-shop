<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: 'my-button',
	}
</script>

<style lang="scss" scoped>
	.btn{
		padding: 12px 35px;
		margin-right: 15px;
		border-radius: 25px;
		background: #0E3459;
		color: #55E29E;
		cursor: pointer;
	}
</style>