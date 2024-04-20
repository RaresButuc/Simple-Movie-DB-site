import * as fs from 'node:fs';

const movieDB = {
	professionals: [],
	movies: [],
	genres: []
}

//write you code after this line


const task1 = (data) => {
	let persons = [];
	let uniqPersons;
	for (let obj of data) {
		persons.push(obj.writers);
		persons.push(obj.actors);
		persons.push(obj.directors)
	}
	persons = persons.join(",").split(",")
	uniqPersons = [...new Set(persons)]
	let arr = Array.from({ length: uniqPersons.length }, () => ({ id: 0, name: "", roles: [] }))
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < uniqPersons.length; j++) {
			arr[i].name = uniqPersons[i]
		}
	}
	arr.forEach(elem => {
		elem.id = 1 + arr.indexOf(elem)
	})
	for (let a = 0; a < arr.length; a++) {
		for (let obj of data) {
			for (let b = 0; b < obj.writers.length; b++) {
				for (let c = 0; c < obj.actors.length; c++) {
					for (let d = 0; d < obj.directors.length; d++) {
						if (arr[a].name === obj.writers[b]) arr[a].roles.push("writers")
						if (arr[a].name === obj.actors[c]) arr[a].roles.push("actors")
						if (arr[a].name === obj.directors[d]) arr[a].roles.push("directors")
					}
				}
			}
		}
		arr[a].roles = [...new Set(arr[a].roles)]
	}
	return arr
}

const task2 = (data) => {
	let professionals = [];
	for (let key of data.professionals) {
		professionals.push(key)
	}
	for (let obj of data.movies) {
		for (let people of professionals) {
			for (let b = 0; b < obj.writers.length; b++) {
				for (let c = 0; c < obj.actors.length; c++) {
					for (let d = 0; d < obj.directors.length; d++) {
						if (obj.writers[b] === people.name) obj.writers[b] = people.id
						if (obj.actors[c] === people.name) obj.actors[c] = people.id
						if (obj.directors[d] === people.name) obj.directors[d] = people.id
					}
				}
			}
		}
	}
	return data.movies
}

const task6 = (data) =>{
	let genres = [];
	for (let key of data) {
		genres.push(key.genres)
	}
	genres = genres.join(",").split(",")
	genres =[...new Set(genres)]
	let arr = Array.from({ length: genres.length }, () => ({ id: 0, name: ""}))
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < genres.length; j++) {
			arr[i].name = genres[i]
		}
	}
	arr.forEach(element => {
		element.id = 1 + arr.indexOf(element)
	});
	return arr
}

	const read = fs.readFileSync('data.json');
	const movie = JSON.parse(read);
	movieDB.professionals = task1(movie.movies)
	movieDB.movies = movie.movies
	movieDB.genres = task6(movie.movies)


//apelare exercitiul 2	
console.log(movieDB.genres)
movieDB.movies = task2(movieDB)

	//console.log(task2(movie.movies))
	
	



//write your code brefore this line

export { movieDB };
