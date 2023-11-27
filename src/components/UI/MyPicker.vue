<template>
	<div @click.stop="$emit('someEvent',currentValue)" class="picker">
		<button @click="showPicker" class="picker__button picker__button_role_show" >add to cart</button>
		<div class="picker__wrapper">
			<button @click="decreaseValue(currentValue)" class="picker__button picker__button_border_reverse">-</button>
			<VueScrollPicker @click="" dragSensitivity:0.5 touchSensitivity:0.5 :options="options" v-model="currentValue"/>
			<button @click="increaseValue(currentValue)" class="picker__button">+</button>
		</div>
	</div>



	<!-- <p>currentValue = <strong>{{ currentValue === null ? '(null)' : currentValue }}</strong></p> -->
</template>
<script>
  import { VueScrollPicker } from 'vue-scroll-picker'
  import { useQuasar } from 'quasar'
  export default {
	components: {
	  VueScrollPicker,
	  useQuasar // export VueScrollPicker is component
	},
	setup () {
		const $q = useQuasar()

		return {
			addNotif(position) {
				$q.notify({
					group: 'add-group',
					position,
					message: 'Товар добавлен в корзину' ,
					color: 'secondary'
				})
			},
			delNotif(position) {
				$q.notify({
					group: 'del-group',
					position,
					message: 'Товар удален из корзины' ,
					color: 'secondary'
				})
			},
		}
	},
	data(){
		return{
			isVisible: false,
			options: ["100g", "200g", "300g","400g","500g","600g","700g","800g","900g","1,0kg","1,1kg","1,2kg","1,3kg","1,4kg","1,5kg","1,6kg","1,7kg","1,8kg","1,9kg","2,0kg",],
			currentValue: null,

		}
	},
	methods:{
		showPicker(){

			if(window.innerWidth < 768){
				this.addNotif('top-right')
			}else{
				this.addNotif('bottom')
			}
			let cardWrapper = event.target.closest('.product__wrapper');
			cardWrapper.classList.toggle('state_open');

		},
		decreaseValue(currentValue){
			if (this.options.indexOf(currentValue) == 0){
				if(window.innerWidth < 768){
					this.delNotif('top-right')
				}else{
					this.delNotif('bottom')
				}
				let cardWrapper = event.target.closest('.product__wrapper');
				cardWrapper.classList.toggle('state_open');
			}
			else{
				let curValue = this.options.indexOf(currentValue);
				this.currentValue = this.options[curValue - 1]
				// console.log(this.currentValue);
			}

		},
		increaseValue(currentValue){
			 let curValue = this.options.indexOf(currentValue);
			 this.currentValue = this.options[curValue + 1]
			//  console.log(this.currentValue);
		}
	},
	mounted(){
		// curPickerItems.forEach(item=>{
		// 	console.log(item);
		// })
	}
  }
</script>
<style src="vue-scroll-picker/lib/style.css">
</style>
<style lang="scss">
	.picker{
		width: 100%;
		&__wrapper{
			// height: 100%;
			position: relative;
			top: 40px;
			transition: all 0.3s ease 0s;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}

	}
	.picker__button{
		width: 50px;
		height: 30px;
		color: #0E3459;
		font-size: 20px;
		border-radius: 0px 5px 5px 0px;
		background-color: #59E39F;
		&_role_show{
			width: fit-content;
			position: relative;
			top: 30px;
			border-radius: 5px;
			width: 100%;
			font-size: 16px;
			transition: top 0.3s ease 0s;
			font-weight: 600;
		}
		&_border_reverse{
			border-radius: 5px 0px 0px 5px;
		}
	}
</style>