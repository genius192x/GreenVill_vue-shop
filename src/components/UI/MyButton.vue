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
		border: 1px solid teal;
		padding: 10px;
		margin-right: 15px;
		border-radius: 4px;
		background: teal;
		color: white;
		cursor: pointer;
	}
</style>