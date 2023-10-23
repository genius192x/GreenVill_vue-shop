export const cartModule = {
    state: () => ({
        items:[
			{
				id:1,
				weight: 300,
				price: 6.85,
				oldPrice: 7.00,
				previewImg: '1.png',
				title: 'Bananas',
			},
			{
				id:3,
				weight: 600,
				price: 4.85,
				oldPrice: 6.85,
				previewImg: '3.png',
				title: 'Oranges',
			},
			{
				id:4,
				weight: 200,
				price: 3.85,
				oldPrice: 6.85,
				previewImg: '2.png',
				title: 'Avocado',
			},
			{
				id:5,
				weight: 100,
				price: 4.85,
				oldPrice: 6.85,
				previewImg: '3.png',
				title: 'Oranges',
			},
		],
    }),
    getters: {
		getItemById: (state) => (id) => {
			return state.items.find(item => item.id === id);
		}
    },
    mutations: {

    },
    actions: {

    },
    namespaced: true
}