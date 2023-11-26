<template>
	<input type="text" style="border: 1px solid black;">
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