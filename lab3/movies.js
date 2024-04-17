function populateMovies(movies, categoryTitle) {
  const section = document.querySelector("section");
  const subsection = document.createElement("subsection");
  section.appendChild(subsection);
  const myH1 = document.createElement("h1");
  myH1.textContent = categoryTitle;
  subsection.appendChild(myH1);
  for (const movie of movies) {
    const myEntry = document.createElement("movie_entry");
    const myH2 = document.createElement("h2");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myPara4 = document.createElement("p");
    const myList = document.createElement("ul");
    myH2.textContent = movie.title;
    myPara2.textContent = `Year: ${movie.year}`;
    myPara3.textContent = "Cast:";
    const castList = movie.cast;
    for (const actor of castList) {
      const listItem = document.createElement("li");
      listItem.textContent = actor;
      myList.appendChild(listItem);
    }
    if (movie.genres) {
      myPara4.textContent = `Genres: ${movie.genres}`;
    }
    myEntry.appendChild(myH2);
    myEntry.appendChild(myPara2);
    myEntry.appendChild(myPara3);
    myEntry.appendChild(myList);
    myEntry.appendChild(myPara4);
    subsection.appendChild(myEntry);
  }
}

async function populate() {
  const requestURL = "https://dsc106.com/resources/data/movies.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const movies = await response.json();

  console.log(
    "Number of movies in the Webfilms collection: ",
    Object.keys(movies).length
  );
  let jimCarrey = movies.filter(
    (movie) =>
      !movie.genres.includes("Comedy") &&
      !movie.genres.includes("Family") &&
      !movie.genres.includes("Animated") &&
      movie.cast.includes("Jim Carrey")
  );
  let num_london = Object.keys(
    movies.filter((movie) => movie.title.includes("London"))
  ).length;
  console.log(`Number of London: ${num_london}`);
  let num_ny = Object.keys(
    movies.filter((movie) => movie.title.includes("New York"))
  ).length;
  console.log(`Number of New York: ${num_ny}`);
  let num_paris = Object.keys(
    movies.filter((movie) => movie.title.includes("Paris"))
  ).length;
  console.log(`Number of Paris: ${num_paris}`);
  populateMovies(jimCarrey, "Serious Side of Jim Carrey");
}

async function populate_radcliffe_fiennes() {
  const requestURL = "https://dsc106.com/resources/data/movies.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const movies = await response.json();

  let radFiennes = movies.filter(
    (movie) =>
      movie.cast.includes("Daniel Radcliffe") ^
      movie.cast.includes("Ralph Fiennes")
  );
  populateMovies(
    radFiennes,
    "Movies with Daniel Radcliffe or Ralph Fiennes but not both"
  );
}

async function populate_adventure() {
  const requestURL = "https://dsc106.com/resources/data/movies.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const movies = await response.json();

  const moviesByDecade = {};
  for (const movie of movies) {
    if (
      movie.title.includes("Adventure") ||
      movie.title.includes("Exploration")
    ) {
      moviesByDecade[`${Math.floor(movie.year / 10) * 10}`] = (moviesByDecade[`${Math.floor(movie.year / 10) * 10}`] || 0) + 1;
    }
  }
  console.log(moviesByDecade);
}

populate();

// Run this function to get the Radcliffe or Fiennes movies
// populate_radcliffe_fiennes();

// Run this function to get the number of adventure or exploration movies per decade
// populate_adventure();