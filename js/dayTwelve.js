// AJAX & Fetch

//fetch() // Metodo para realizar peticiones HTTP a un servidor

// Ejemplo:

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bbcc7a67cfmshbdfdd5620579701p131a5ajsn41d66c98272f',
		'X-RapidAPI-Host': 'movies115.p.rapidapi.com'
	}
};

fetch('https://movies115.p.rapidapi.com/cartaz', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));