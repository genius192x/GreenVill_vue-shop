<template>
	<div class="container">
		<AccauntLayout v-if="isLogin"/>
		<FormAuth v-else/>
	</div>
</template>

<script>
import AccauntLayout from '@/components/AccauntLayout.vue';
import FormAuth from '@/components/FormAuth.vue'
import { useInitStore } from '@/store/initStore';
import { mapWritableState } from 'pinia';
	export default {
	components:{FormAuth,AccauntLayout},
	computed:{
		...mapWritableState(useInitStore, ['isLogin'])
	}
}
</script>