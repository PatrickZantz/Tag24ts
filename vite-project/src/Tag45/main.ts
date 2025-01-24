interface PokemonListItem {
  name: string;
  url: string;
}

interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string }; is_hidden: boolean }[];
  sprites: { front_default: string; back_default: string };
}

let allPokemon: PokemonDetails[] = [];
let offset = 0;
const limit = 20;

async function fetchPokemonList(
  limit: number,
  offset: number
): Promise<PokemonListItem[]> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();
  return data.results;
}

async function fetchPokemonDetails(
  pokemonList: PokemonListItem[]
): Promise<PokemonDetails[]> {
  return await Promise.all(
    pokemonList.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      return response.json();
    })
  );
}

function createPokemonCard(pokemon: PokemonDetails): HTMLElement {
  const card = document.createElement("div");
  card.classList.add("pokemon-card");

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <p>Typ: ${pokemon.types.map((type) => type.type.name).join(", ")}</p>
      </div>
      <div class="card-back">
        <h2>${pokemon.name} Details</h2>
        <p>Größe: ${pokemon.height / 10} m</p>
        <p>Gewicht: ${pokemon.weight / 10} kg</p>
        <p>Basis-Erfahrung: ${pokemon.base_experience}</p>
        <p>Fähigkeiten: ${pokemon.abilities
          .map((ability) => ability.ability.name)
          .join(", ")}</p>
      </div>
    </div>
  `;

  return card;
}

function renderPokemon(pokemonList: PokemonDetails[]) {
  const pokemonContainer = document.getElementById("pokemonContainer");
  if (pokemonContainer) {
    pokemonContainer.innerHTML = "";
    pokemonList.forEach((pokemon) => {
      const pokemonCard = createPokemonCard(pokemon);
      pokemonContainer.appendChild(pokemonCard);
    });
  }
}

async function displayPokemons() {
  try {
    const pokemonList = await fetchPokemonList(limit, offset);
    const pokemonDetails = await fetchPokemonDetails(pokemonList);
    allPokemon = allPokemon.concat(pokemonDetails);
    renderPokemon(allPokemon);
    offset += limit;
  } catch (error) {
    console.error("Fehler beim Anzeigen der Pokemon:", error);
  }
}

async function searchPokemon(searchTerm: string) {
  if (searchTerm.length === 0) {
    renderPokemon(allPokemon);
    return;
  }

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=100000`
    );
    const data = await response.json();
    const filteredPokemon = data.results.filter((p: PokemonListItem) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const pokemonDetails = await fetchPokemonDetails(filteredPokemon);
    renderPokemon(pokemonDetails);
  } catch (error) {
    console.error("Fehler bei der Pokémon-Suche:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayPokemons();

  const searchInput = document.getElementById(
    "searchInput"
  ) as HTMLInputElement;
  searchInput?.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    searchPokemon(target.value);
  });
});
