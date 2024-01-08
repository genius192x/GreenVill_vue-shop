<template>
	<q-select
		transition-show="jump-up"
		transition-hide="jump-down"
		filled
		clearable
		v-model="model"
		use-input
		emit-value
		behavior="menu"
		dropdown-icon="search"
		color="cyan-8"
		bg-color="transparent"
		input-class="form-control__input"
		input-debounce="0"
		:options="filterOptions"
		@filter="filterFn"
		style="max-width: 500px; width: 100%"
	>
		<template v-slot:option="scope">
			<q-item v-bind="scope.itemProps" class="tippy-panel__item">
				<q-item-section color="white">
					<q-item-label class="tippy-panel__title" @click="$router.push(`/shop/${scope.opt.id}`)">{{
						scope.opt.title
					}}</q-item-label>
				</q-item-section>
			</q-item>
		</template>
	</q-select>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useProductsStore} from '@/store/productsStore'
	export default {
		components: {
			useQuasar,
		},
		setup() {
			const filterStore = useProductsStore()
			const filterOptions = ref(filterStore.products)
			return {
				model: ref(null),
				filterOptions,
				filterStore,
				createValue(value, done) {
					if (value.length > 0) {
						if (!stringOptions.includes(value)) {
							stringOptions.push(value)
						}
						done(value, 'toggle')
					}
				},

				filterFn(value, update) {
					update(() => {
						if (value === '') {
							filterOptions.value = filterStore.products
						} else {
							const needle = value.toLowerCase()
							filterOptions.value = filterStore.products.filter(
								(v) => v.value.toLowerCase().indexOf(needle) > -1
							)
						}
					})
				}
			}
		},
	}
</script>

<style lang="scss" >
.q-field{
	border-bottom: 1px solid teal;
	transition: all 0.3s ease 0s;
}
</style>