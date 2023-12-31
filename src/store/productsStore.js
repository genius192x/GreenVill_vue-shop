import { defineStore } from 'pinia'
import { Client, Databases } from 'appwrite';

const client = new Client();

const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('65679c67792fb8acf4ed') // Your project ID
;

const promise = databases.listDocuments('656a469eabbd8d3d53b0', '656a46be953e9d2c10a3');

// promise.then(function (response) {
//     // console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });
export const useProductsStore = defineStore('productsStore', {
  state: () => ({
    products:[
			{
				id:1,
				badge: 'Top deal!',
				price: 6.78,
				oldPrice: 7.00,
				img: '1.png',
				previewImg: '1.png',
				promoTitle: 'Fresh BANANAS UP TO 10% OFF',
				description: 'Покупая сладкие тропические бананы, вы получаете не только вкусное лакомство, но и ценный источник питательных веществ. Бананы станут отличным выбором для поддержания здорового образа жизни и повышения энергии на протяжении всего дня.',
				characteristics: [
					{
						title: 'Сорт',
						value: 'Сладкие тропические бананы'
					},
					{
						title: 'Происхождение',
						value: 'Выращены в экваториальных регионах Южной Америки'
					},
					{
						title: 'Вес',
						value: 'Большие, один банан весит примерно 150 грамм'
					},
					{
						title: 'Свежесть',
						value: 'Собраны в зрелости для достижения оптимального вкуса и текстуры'
					},
					{
						title: 'Вкус',
						value: 'Сладкий, сочный и ароматный'
					},
				],
				photos:[
					{
						img:'banana/1.jpg',
						alt: '',
					},
					{
						img:'banana/2.jpg',
						alt: '',
					},
					{
						img:'banana/3.jpg',
						alt: '',
					},
					{
						img:'banana/4.jpg',
						alt: '',
					},
					{
						img:'banana/5.jpg',
						alt: '',
					},
				],
				title: 'Bananas',
				value: 'Bananas',
				link: '#'
			},
			{
				id:2,
				badge: 'Top deal!',
				price: 3.85,
				oldPrice: 6.85,
				img: '2.png',
				previewImg: '2.png',
				promoTitle: 'Fresh AVOCADO UP TO 15% OFF',
				description: 'Покупая премиум-класс авокадо, вы можете наслаждаться его нежным вкусом и получать ценные питательные вещества, благодаря которым ваш организм будет здоровым и полным энергии.',
				characteristics: [
					{
						title: 'Сорт',
						value: 'Премиум-класс гладкокожих авокадо'
					},
					{
						title: 'Происхождение',
						value: 'Выращены на экологически чистых плантациях в Мексике'
					},
					{
						title: 'Вес',
						value: 'Каждое авокадо весит примерно 200 грамм'
					},
					{
						title: 'Свежесть',
						value: 'Собраны в оптимальной зрелости для идеального вкуса и текстуры'
					},
					{
						title: 'Вкус',
						value: 'Нежное маслянистое мякоть, сливочный вкус с легкой ореховой ноткой'
					},
				],
				photos:[
					{
						img:'avocado/1.jpg',
						alt: '',
					},
					{
						img:'avocado/2.jpg',
						alt: '',
					},
					{
						img:'avocado/3.jpg',
						alt: '',
					},
					{
						img:'avocado/4.jpg',
						alt: '',
					},
					{
						img:'avocado/5.jpg',
						alt: '',
					},
				],
				title: 'Avocado',
				value: 'Avocado',
				link: '#'
			},
			{
				id:3,
				badge: 'Top deal!',
				price: 4.85,
				oldPrice: 6.85,
				img: '3.png',
				previewImg: '3.png',
				promoTitle: 'Fresh ORANGES UP TO 10% OFF',
				description: 'Покупая апельсины высокого качества, вы гарантированно получаете свежие и сочные фрукты, которые принесут вам радость и пользу для здоровья.',
				characteristics: [
					{
						title: 'Сорт',
						value: 'Сочные апельсины премиум-класса'
					},
					{
						title: 'Происхождение',
						value: 'Выращены на солнечных плантациях в Турции'
					},
					{
						title: 'Вес',
						value: 'Каждый апельсин весит примерно 150 грамм'
					},
					{
						title: 'Свежесть',
						value: 'Были собраны недавно и полностью зрелые'
					},
					{
						title: 'Вкус',
						value: 'Нежная и сочная мякоть, сладкий и приятный цитрусовый аромат'
					},
				],
				photos:[
					{
						img:'orange/1.jpg',
						alt: '',
					},
					{
						img:'orange/2.jpg',
						alt: '',
					},
					{
						img:'orange/3.jpg',
						alt: '',
					},
					{
						img:'orange/4.jpg',
						alt: '',
					},
					{
						img:'orange/5.jpg',
						alt: '',
					},
				],
				title: 'Oranges',
				value: 'Oranges',

				link: '#'
			},
			{
				id:4,
				badge: 'Top deal!',
				price: 3.85,
				oldPrice: 6.85,
				img: '2.png',
				previewImg: '2.png',
				promoTitle: 'Fresh AVOCADO UP TO 15% OFF',
				description: 'Покупая премиум-класс авокадо, вы можете наслаждаться его нежным вкусом и получать ценные питательные вещества, благодаря которым ваш организм будет здоровым и полным энергии.',
				characteristics: [
					{
						title: 'Сорт',
						value: 'Премиум-класс гладкокожих авокадо'
					},
					{
						title: 'Происхождение',
						value: 'Выращены на экологически чистых плантациях в Мексике'
					},
					{
						title: 'Вес',
						value: 'Каждое авокадо весит примерно 200 грамм'
					},
					{
						title: 'Свежесть',
						value: 'Собраны в оптимальной зрелости для идеального вкуса и текстуры'
					},
					{
						title: 'Вкус',
						value: 'Нежное маслянистое мякоть, сливочный вкус с легкой ореховой ноткой'
					},
				],
				photos:[
					{
						img:'avocado/1.jpg',
						alt: '',
					},
					{
						img:'avocado/2.jpg',
						alt: '',
					},
					{
						img:'avocado/3.jpg',
						alt: '',
					},
					{
						img:'avocado/4.jpg',
						alt: '',
					},
					{
						img:'avocado/5.jpg',
						alt: '',
					},
				],
				title: 'Avocado',
				value: 'Avocado',
				link: '#'
			},
			{
				id:5,
				badge: 'Top deal!',
				price: 4.85,
				oldPrice: 6.85,
				img: '3.png',
				previewImg: '3.png',
				promoTitle: 'Fresh ORANGES UP TO 10% OFF',
				description: 'Покупая апельсины высокого качества, вы гарантированно получаете свежие и сочные фрукты, которые принесут вам радость и пользу для здоровья.',
				characteristics: [
					{
						title: 'Сорт',
						value: 'Сочные апельсины премиум-класса'
					},
					{
						title: 'Происхождение',
						value: 'Выращены на солнечных плантациях в Турции'
					},
					{
						title: 'Вес',
						value: 'Каждый апельсин весит примерно 150 грамм'
					},
					{
						title: 'Свежесть',
						value: 'Были собраны недавно и полностью зрелые'
					},
					{
						title: 'Вкус',
						value: 'Нежная и сочная мякоть, сладкий и приятный цитрусовый аромат'
					},
				],
				photos:[
					{
						img:'orange/1.jpg',
						alt: '',
					},
					{
						img:'orange/2.jpg',
						alt: '',
					},
					{
						img:'orange/3.jpg',
						alt: '',
					},
					{
						img:'orange/4.jpg',
						alt: '',
					},
					{
						img:'orange/5.jpg',
						alt: '',
					},
				],
				title: 'Oranges',
				value: 'Oranges',
				link: '#'
			},
		],
  }),

  actions: {
    getProductById(id){
			return this.products.find(product => product.id === id);
		}
  }
})
