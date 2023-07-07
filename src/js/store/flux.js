const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: 'people',
			planets: 'planets',
			vehicles: 'vehicles',
			favorite: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: (fav) => {
				const store = getStore();

				store.favorite.includes(fav) ? alert("Favorite already exists!!") : (
					setStore({favorite: [...store.favorite, fav]})
				)
				
			},
			deleteFavorite: (favToDelete) => {
				const store = getStore();
				setStore({favorite: store.favorite.filter((fav) => fav !== favToDelete)})
			}
		}
	};
};

export default getState;
