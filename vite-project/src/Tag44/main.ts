interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodos(): Promise<IToDo[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error(`HTTP-Error! Status: ${response.status}`);
    }
    const todos: IToDo[] = await response.json();
    return todos.sort((a, b) => a.title.localeCompare(b.title)); // Alphabetisch sortieren
  } catch (error) {
    console.error("Fehler beim Laden der ToDos:", error);
    return [];
  }
}

function renderTodos(todos: IToDo[], filter: string = ""): void {
  const todoList = document.getElementById("todo-list");
  if (!todoList) return;

  // Filter anwenden
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(filter.toLowerCase())
  );

  // HTML generieren
  todoList.innerHTML = filteredTodos
    .map(
      (todo) => `
      <div class="todo ${todo.completed ? "completed" : "not-completed"}">
        ${todo.title}
      </div>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", async () => {
  const todos = await fetchTodos();

  // Initiale Anzeige der ToDos
  renderTodos(todos);

  // Event Listener für die Suche
  const searchInput = document.getElementById("search") as HTMLInputElement;
  searchInput.addEventListener("input", () => {
    renderTodos(todos, searchInput.value);
  });
});

// ##########

interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
  region: string;
}

async function fetchCountries(): Promise<Country[]> {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Country[] = await response.json();
    return data;
  } catch (error) {
    console.error("Es gab einen Fehler beim Abrufen der Daten:", error);
    return [];
  }
}

function displayCountries(countries: Country[]) {
  const container = document.getElementById("countries-container");
  if (!container) return;

  container.innerHTML = "";

  countries.forEach((country) => {
    const countryElement = document.createElement("div");
    countryElement.className = "country-card";
    countryElement.innerHTML = `
        <img src="${country.flags.png}" alt="${country.name.common} flag">
        <h2>${country.name.common}</h2>
        <p>Hauptstadt: ${country.capital?.[0] || "Nicht verfügbar"}</p>
        <p>Bevölkerung: ${country.population.toLocaleString()}</p>
        <p>Region: ${country.region}</p>
      `;
    container.appendChild(countryElement);
  });
}

function setupSearch(countries: Country[]) {
  const searchInput = document.getElementById(
    "search-input"
  ) as HTMLInputElement;
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm)
    );
    displayCountries(filteredCountries);
  });
}

async function initApp() {
  const countries = await fetchCountries();
  displayCountries(countries);
  setupSearch(countries);
}

initApp();
