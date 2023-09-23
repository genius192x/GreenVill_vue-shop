
export const bannerModule = {
    state: () => ({
        banners:[
			{
				id:1,
				badge: 'Top deal!',
				img: '1.png',
				previewImg: '1.png',
				promoTitle: 'Fresh BANANAS UP TO 10% OFF',
				photos:[
					{
						img:'1.png',
						alt: '',
					},
					{
						img:'1.png',
						alt: '',
					},
					{
						img:'1.png',
						alt: '',
					},
				],
				title: 'Bananas',
				link: '#'
			},
			{
				id:2,
				badge: 'Top deal!',
				img: '2.png',
				previewImg: '2.png',
				promoTitle: 'Fresh AVOCADO UP TO 15% OFF',
				photos:[
					{
						img:'2.png',
						alt: '',
					},
					{
						img:'2.png',
						alt: '',
					},
					{
						img:'2.png',
						alt: '',
					},
				],
				title: 'Fresh AVOCADO UP TO 15% OFF',
				link: '#'
			},
			{
				id:3,
				badge: 'Top deal!',
				img: '3.png',
				previewImg: '3.png',
				promoTitle: 'Fresh ORANGES UP TO 10% OFF',
				photos:[
					{
						img:'3.png',
						alt: '',
					},
					{
						img:'3.png',
						alt: '',
					},
					{
						img:'3.png',
						alt: '',
					},
				],
				title: 'Oranges',
				link: '#'
			},
			{
				id:4,
				badge: 'Top deal!',
				img: '1.png',
				previewImg: '1.png',
				promoTitle: 'Fresh BANANAS UP TO 10% OFF',
				photos:[
					{
						img:'1.png',
						alt: '',
					},
					{
						img:'1.png',
						alt: '',
					},
					{
						img:'1.png',
						alt: '',
					},
				],
				title: 'Bananas',
				link: '#'
			},
			{
				id:5,
				badge: 'Top deal!',
				img: '2.png',
				previewImg: '2.png',
				promoTitle: 'Fresh AVOCADO UP TO 15% OFF',
				photos:[
					{
						img:'2.png',
						alt: '',
					},
					{
						img:'2.png',
						alt: '',
					},
					{
						img:'2.png',
						alt: '',
					},
				],
				title: 'Fresh AVOCADO UP TO 15% OFF',
				link: '#'
			},
			{
				id:6,
				badge: 'Top deal!',
				img: '3.png',
				previewImg: '3.png',
				promoTitle: 'Fresh ORANGES UP TO 10% OFF',
				photos:[
					{
						img:'3.png',
						alt: '',
					},
					{
						img:'3.png',
						alt: '',
					},
					{
						img:'3.png',
						alt: '',
					},
				],
				title: 'Fresh ORANGES UP TO 10% OFF',
				link: '#'
			},
		],
    }),
    getters: {
		getProductById: (state) => (id) => {
			return state.banners.find(product => product.id === id);
		}
    },
    mutations: {

    },
    actions: {

    },
    namespaced: true
}