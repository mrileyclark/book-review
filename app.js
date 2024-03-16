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
