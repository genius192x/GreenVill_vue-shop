
export const bannerModule = {
    state: () => ({
        banners:[
			{
				id:1,
				badge: 'Top deal!',
				img: '1.png',
				previewImg: '1.png',
				promoTitle: 'Fresh BANANAS UP TO 10% OFF',
				title: 'Bananas',
				link: '#'
			},
			{
				id:2,
				badge: 'Top deal!',
				img: '2.png',
				previewImg: '2.png',
				promoTitle: 'Fresh AVOCADO UP TO 15% OFF',
				title: 'Avocado',
				link: '#'
			},
			{
				id:3,
				badge: 'Top deal!',
				img: '3.png',
				previewImg: '3.png',
				promoTitle: 'Fresh ORANGES UP TO 10% OFF',
				title: 'Oranges',
				link: '#'
			},
			{
				id:4,
				badge: 'Top deal!',
				img: '1.png',
				previewImg: '1.png',
				promoTitle: 'Fresh AVOCADO UP TO 15% OFF',
				title: 'Avocado',
				link: '#'
			},
			{
				id:5,
				badge: 'Top deal!',
				img: '2.png',
				previewImg: '2.png',
				promoTitle: 'Fresh ORANGES UP TO 10% OFF',
				title: 'Oranges',
				link: '#'
			},
			{
				id: 6,
				badge: 'Top deal!',
				img: '2.png',
				previewImg: '2.png',
				promoTitle: 'Fresh AVOCADO UP TO 15% OFF',
				title: 'Avocado',
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