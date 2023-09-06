<template>
	<div class="dialog" v-if="show" @click="hideDialog">
		<div @click.stop class="dialog__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'my-dialog',
		props: {
			show: {
				type: Boolean,
				default: false,
			}
		},
		methods:{
			hideDialog(){
				this.$emit('update:show', false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.dialog{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.4);
		display: flex;

		&__content{
			padding: 10px;
			background: #fff;
			border-radius: 10px;
			margin:  auto;
			min-height: 50px;
			min-width: 300px;
		}
	}
</style>