<template>
	<div class="labels__wrapper">
		<div v-if="labels" class="labels__list">
			<label-item v-for="label in labels" :label="label" class="labels__item"></label-item>
		</div>
	</div>
</template>

<script>
import LabelItem from '@/components/LabelItem.vue';
	export default {
		components: { LabelItem },
		props: {
			labels: {
				type: Array,
				required: true
			}
		},
	}
</script>

<style lang="scss">
	.labels{
		&__wrapper{
			margin-top: 30px;
		}
		&__list{
			display: flex;
			gap: 20px;
			overflow: auto;
			padding-bottom: 10px;
		}
	}
</style>