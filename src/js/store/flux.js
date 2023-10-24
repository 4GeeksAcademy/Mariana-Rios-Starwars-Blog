const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			starships:[],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPlanets: () => {
				fetch('https://swapi.dev/api/planets')
				.then(res => res.json())
				.then(data => setStore({planets : data.results}))
				.catch(err => console.error(err))
			},

			getStarships: () => {
				fetch('https://swapi.dev/api/starships')
				.then(res => res.json())
				.then(data => setStore({starships : data.results}))
				.catch(err => console.error(err))
			},

			getVehicles: () => {
				fetch('https://swapi.dev/api/vehicles')
				.then(res => res.json())
				.then(data => setStore({vehicles : data.results}))
				.catch(err => console.error(err))
			},

			getCharacters: () => {
				fetch('https://swapi.dev/api/people')
					.then(resp => {
						console.log("is response succesful: " + resp.ok); // will be true if the response is successfull
						console.log("status code: " + resp.status); // the status code = 200 or code = 400 etc.
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data)
						setStore({characters: data.results})
					})
					
					.catch(error => {
						//error handling
						console.log(error)
					})
			},

			addToFavs: (name) => {
				let store = getStore()
				store.favorites.push(name)
				setStore(store)
			},

			deleteFavorite: (i) => {
				let store = getStore()
				let newFavorites = store.favorites.filter((item, index) => index != i)
				setStore({favorites: newFavorites})
			}
			//THIS WAS FOR WHEN USING SWAPI.TECH BUT IT DOESN'T FULLY WORK (we are not supposed to fetch within a fetch. supposed to fetch extra info from a function inside Card component)
			// getChars: async () =>  {
			// 	const genRes = await fetch("https://www.swapi.tech/api/people")
			// 	const genInfo = await genRes.json()
			// 	// console.log("genInfo", genInfo.results)
			// 	const detailInfo = await genInfo.results.map(async (char) => {
			// 		let detRes = await (fetch(char.url))
			// 		let detInfo = await detRes.json()
			// 		let results = Promise.resolve(detInfo)
			// 		return(results)
			// 	});

			// 	console.log("FINAL DET INFO:", detailInfo)

			// },
			  
		}
	};
};

export default getState;
