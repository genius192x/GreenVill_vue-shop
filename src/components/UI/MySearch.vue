<template>
	<q-form @submit="onSubmit" class="q-gutter-md">
		<q-select
			filled
			v-model="model"
			use-input
			input-debounce="0"
			label="Simple filter"
			:options="options"
			@filter="filterFn"
			style="width: 250px"
		>
			<template v-slot:no-option>
				<q-item>
					<q-item-section class="text-grey">
					No results
					</q-item-section>
				</q-item>
			</template>
		</q-select>
		<div>
			<q-btn label="Submit" type="submit" color="primary"/>
		</div>
	</q-form>
	<q-card
	v-if="submitted"
	flat
	bordered
	class="q-mt-md"
	:class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-2'"
	>
		<template v-if="submitEmpty">
			<q-card-section>
			Submitted form contains empty formData.
			</q-card-section>
		</template>
		<template v-else>
			<q-card-section>Submitted form contains the following formData (key = value):</q-card-section>
			<q-separator />
			<q-card-section class="row q-gutter-sm items-center">
			<div
				v-for="(item, index) in submitResult"
				:key="index"
				class="q-px-sm q-py-xs bg-grey-8 text-white rounded-borders text-center text-no-wrap"
			>{{ item.name }} = {{ item.value }}</div>
			</q-card-section>
		</template>
	</q-card>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
].reduce((acc, opt) => {
  for (let i = 1; i <= 2; i++) {
    acc.push(opt + ' ' + i)
  }
  return acc
}, [])
	export default {
		components: {
			useQuasar,
		},
		setup () {
			const submitted = ref(false)
			const submitEmpty = ref(false)
			const submitResult = ref([])
			const options = ref(stringOptions)

			return {
				model: ref(null),
				options,

				filterFn (val, update) {
					if (val === '') {
					update(() => {
						options.value = stringOptions

						// here you have access to "ref" which
						// is the Vue reference of the QSelect
					})
					return
					}

					update(() => {
						const needle = val.toLowerCase()
						options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
					})
				},
				accepted: ref([]),

				submitted,
				submitEmpty,
				submitResult,

				onSubmit (evt) {
					const formData = new FormData(evt.target)
					const data = []

					for (const [ name, value ] of formData.entries()) {
						data.push({
							name,
							value
						})
					}

					submitted.value = true
					submitResult.value = data
					submitEmpty.value = data.length === 0
				}
			}
		},
	}
</script>

<style lang="scss" scoped>

</style>