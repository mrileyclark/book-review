const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// function showRecipes(images) {
//   // use this for recipe api

//references html element
main.innerHTML = "";

// images.forEach((image) => {
//   const { picture, title, overview} = image

const mainEl = document.createElement("div");

mainEl.innerHTML = `
    <img src="https://th.bing.com/th?id=OIP.jN0-lvBY8CCTcS8ITLgO4QHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" 
      alt="fake exampe">
      <div class=movie-info>
        <h3>Test title</h3>
        <span>This is test</span>
      </div>
      <div class="overview">
        <h3>Overview test</h3>
      </div>
`;

//appends this to the html elem
main.appendChild(mainEl);

// })
// }

const secEl = document.createElement("div");

secEl.innerHTML = `
       <img src="https://th.bing.com/th?id=OIP.jN0-lvBY8CCTcS8ITLgO4QHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" 
      alt="fake exampe">
      <div class=movie-info>
        <h3>Test title 2</h3>
        <span>This is test -ditto</span>
      </div>
      <div class="overview">
        <h3>Overview test-</h3>
      </div>
`;
main2.appendChild(secEl);

//**********************

// gets first 30 results of popular movies

//search by popularity with my own api key
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=63aaf07e1c839389dad481b7331b0094&page=1";
//image of movie
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
//allows to search
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=63aaf07e1c839389dad481b7331b0094&page=1&query="';

//references these elements
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

//get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  // gets data
  const data = await res.json();
  console.log(data);
  showMovies(data.results);
}

//shows movies on main page
function showMovies(movies) {
  //clears main
  main.innerHTML = "";

  //gives access to variiable from movie that comes in
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    //create movie div with data
    const movieEl = document.createElement("div");
    //gives initial div
    movieEl.classList.add("movie");

    //creates movie UI
    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" 
      alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `;
    //puts it into main so display
    main.appendChild(movieEl);
  });
}

//get rating of movies
function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

//listens for submit in search bar
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  //checks serachTerm exists and not empty
  if (searchTerm && searchTerm !== "") {
    //search movies by the searchTerm
    getMovies(SEARCH_API + searchTerm);
    //clears search
    search.value = "";
  } else {
    //reloads page
    window.location.reload();
  }
});
