
export const labelModule = {
    state: () => ({
        labels:[
			{
				id:1,
				title: 'Meal',
				img: '1.png',
				href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			},
			{
				id:2,
				title: 'Milk',
				img: '2.png',
				href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			},
			{
				id:3,
				title: 'Lunch',
				img: '3.png',
				href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			},
			{
				id:4,
				title: 'Bread',
				img: '4.png',
				href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			},
			{
				id:5,
				title: 'Fruits',
				img: '5.png',
				href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			},
			{
				id:6,
				title: 'Desserts',
				img: '6.png',
				href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
			},
		],
    }),
    getters: {
		getProductById: (state) => (id) => {
			return state.labels.find(label => label.id === id);
		}
    },
    mutations: {

    },
    actions: {

    },
    namespaced: true
}