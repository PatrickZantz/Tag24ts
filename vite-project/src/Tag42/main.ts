import { movies } from "./movies";

type Movie = [string, string, string, string, string[], string];

function renderMovies(movies: Movie[]): void {
  const movieList = document.getElementById("movie-list");
  if (movieList) {
    movieList.innerHTML = "";
    movies.forEach((movie) => {
      const li = document.createElement("li");
      li.className = "py-4";
      li.innerHTML = `
                <div class="flex justify-between">
                    <h2 class="text-lg font-semibold">${movie[0]}</h2>
                    <p class="text-gray-500">${movie[1]}</p>
                </div>
                <p class="text-gray-600">Directed by: ${movie[2]}</p>
                <p class="text-gray-600">Rating: ${movie[5]}</p>
            `;
      movieList.appendChild(li);
    });
  }
}

function searchMovies(query: string): Movie[] {
  return movies.filter(
    (movie) =>
      movie[0].toLowerCase().includes(query.toLowerCase()) ||
      movie[1].includes(query) ||
      movie[2].toLowerCase().includes(query.toLowerCase())
  );
}

function sortByYearAscending(a: Movie, b: Movie): number {
  return parseInt(a[1]) - parseInt(b[1]);
}

function sortByYearDescending(a: Movie, b: Movie): number {
  return parseInt(b[1]) - parseInt(a[1]);
}

function sortByRating(a: Movie, b: Movie): number {
  return parseFloat(b[5]) - parseFloat(a[5]);
}

document.getElementById("search-input")?.addEventListener("input", (e) => {
  const query = (e.target as HTMLInputElement).value;
  const filteredMovies = searchMovies(query);
  renderMovies(filteredMovies);
});

document.getElementById("year-up")?.addEventListener("click", () => {
  (document.getElementById("search-input") as HTMLInputElement).value = "";
  const sortedMovies = [...movies].sort(sortByYearAscending);
  renderMovies(sortedMovies);
});

document.getElementById("year-down")?.addEventListener("click", () => {
  (document.getElementById("search-input") as HTMLInputElement).value = "";
  const sortedMovies = [...movies].sort(sortByYearDescending);
  renderMovies(sortedMovies);
});

document.getElementById("best-rate")?.addEventListener("click", () => {
  (document.getElementById("search-input") as HTMLInputElement).value = "";
  const sortedMovies = [...movies].sort(sortByRating);
  renderMovies(sortedMovies);
});

renderMovies(movies);
