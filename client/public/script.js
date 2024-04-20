import { data } from '/data.js';
console.log(data)

const divElement = function (content) {
  return `<div>${content}</div>`;
}
const h1Element = function (content) {
  return `<h1>${content}</h1`;
}
const h2Element = function (content) {
  return `<h2>${content}</h2>`;
}
const h3Element = function (content) {
  return `<h3>${content}</h3>`;
}
const h4Element = function (content) {
  return `<h4>${content}</h4>`;
}
const h5Element = function (content) {
  return `<h5>${content}</h5>`;
}


const loadEvent = function () {

  const page = window.location.pathname.substring(1);
  // Write your JavaScript code after this line

  console.log("data: ", data);
  console.log("page: ", page);

  const rootElement = document.getElementById("root");

  // 1. process the data

  //Movies page
  if (page === "movies") {
    data.movies.forEach(element => {
      document.getElementById("root").insertAdjacentHTML("beforeend", h2Element(`Movie Name:   ${element.title}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Year:</strong> ${element.year}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Runtime:</strong> ${element.runtime}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Genres:</strong> ${element.genres}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Release date:</strong> ${element["release-date"]}`))
      // Replace writers id with their names
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Writers:</strong>`))
      element.writers.forEach(id => {
        data.professionals.forEach(writer => {
          if (id === writer.id)
            document.getElementById("root").insertAdjacentHTML("beforeend", divElement(writer.name))
        });
      });
      //Replace actors id with their names
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Actors:</strong>`))
      element.actors.forEach(id => {
        data.professionals.forEach(actor => {
          if (id === actor.id)
            document.getElementById("root").insertAdjacentHTML("beforeend", divElement(actor.name))
        });
      });
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Storyline:</strong> ${element.storyline || element.description}`))
      //Replace directors id with their names
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Directors:</strong>`))
      element.directors.forEach(id => {
        data.professionals.forEach(director => {
          if (id === director.id)
            document.getElementById("root").insertAdjacentHTML("beforeend", divElement(director.name))
        });
      });
    });

    ///Actors page
  } else if (page === "actors") {
    document.getElementById("root").insertAdjacentHTML("beforeend", h1Element("Actors:"))
    data.professionals.forEach(element => {
      element.roles.forEach(item => {
        if (item === "actors") {
          document.getElementById("root").insertAdjacentHTML("beforeend", h2Element("Actor"))
          document.getElementById("root").insertAdjacentHTML("beforeend", divElement(element.name))
          document.getElementById("root").insertAdjacentHTML("beforeend", h3Element("Movies acted in:"))
        }
      });
      data.movies.forEach(movie => {
        movie.actors.forEach(actor => {
          if (actor === element.id) {
            document.getElementById("root").insertAdjacentHTML("beforeend", divElement(movie.title))
          }
        });
      });
    });

    //Directors page
  } else if (page === "directors") {
    document.getElementById("root").insertAdjacentHTML("beforeend", h1Element("Directors:"))
    data.professionals.forEach(element => {
      element.roles.forEach(item => {
        if (item === "directors") {
          document.getElementById("root").insertAdjacentHTML("beforeend", h2Element("Director"))
          document.getElementById("root").insertAdjacentHTML("beforeend", divElement(element.name))
          document.getElementById("root").insertAdjacentHTML("beforeend", h3Element("Movies directed:"))
        }
      });
      data.movies.forEach(movie => {
        movie.directors.forEach(director => {
          if (director === element.id) {
            document.getElementById("root").insertAdjacentHTML("beforeend", divElement(movie.title))
          }
        });
      });
    });

    //Writers page
  } else if (page === "writers") {
    document.getElementById("root").insertAdjacentHTML("beforeend", h1Element("Writers:"))
    data.professionals.forEach(element => {
      element.roles.forEach(item => {
        if (item === "writers") {
          document.getElementById("root").insertAdjacentHTML("beforeend", h2Element("Writer"))
          document.getElementById("root").insertAdjacentHTML("beforeend", divElement(element.name))
          document.getElementById("root").insertAdjacentHTML("beforeend", h3Element("Movies written:"))
        }
      });

      data.movies.forEach(movie => {
        movie.writers.forEach(writer => {
          if (writer === element.id) {
            document.getElementById("root").insertAdjacentHTML("beforeend", divElement(movie.title))
          }
        });
      });
    });
//Genres page
  } else if (page === "genres") {
    document.getElementById("root").insertAdjacentHTML("beforeend", h1Element("Genres:"))
    data.genres.forEach(dataGenre => {
      document.getElementById("root").insertAdjacentHTML("beforeend", h2Element(`Genre: ${dataGenre.name.toUpperCase()}`))
       data.movies.forEach(element => {
        element.genres.forEach(movieGenre => {
                if (movieGenre === dataGenre.name){
                  document.getElementById("root").insertAdjacentHTML("beforeend", h3Element(`Movie Name:   ${element.title}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Year:</strong> ${element.year}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Runtime:</strong> ${element.runtime}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Genres:</strong> ${element.genres}`))
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Release date:</strong> ${element["release-date"]}`))
      // Replace writers id with their names
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Writers:</strong>`))
      element.writers.forEach(id => {
        data.professionals.forEach(writer => {
          if (id === writer.id)
            document.getElementById("root").insertAdjacentHTML("beforeend", divElement(writer.name))
        });
      });
      //Replace actors id with their names
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Actors:</strong>`))
      element.actors.forEach(id => {
        data.professionals.forEach(actor => {
          if (id === actor.id)
            document.getElementById("root").insertAdjacentHTML("beforeend", divElement(actor.name))
        });
      });
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Storyline:</strong> ${element.storyline || element.description}`))
      //Replace directors id with their names
      document.getElementById("root").insertAdjacentHTML("beforeend", divElement(`<strong>Directors:</strong>`))
      element.directors.forEach(id => {
        data.professionals.forEach(director => {
          if (id === director.id)
            document.getElementById("root").insertAdjacentHTML("beforeend", divElement(director.name))
        });
      });
                }
        // console.log(movie)
        });
      });
     });
  }

  // const getMovoies = (myData) => {
  //  let actorsList = [];
  // for de .. in care procesezi my data din care extragi acctori, 
  //apoi return de actorsList
  // return actorsList
  //}

  // 2. generarea html
  // un sir de caractere pe care il introducem in insertaAdjiacentHTML
  //cand introduci in pagina:
  // let divSection = "";
  // const actorsList = getActors(data.movies)
  //for (..actorsList ){
  // div sevtion += `<div>${element}</div>`
  //}
  // rootElement.insertAdjacentHTML("beforeend", divSection)

  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
