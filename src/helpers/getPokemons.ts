import { TPokemonsResult } from "../types/global.type";
import pFetch from "./fetch";

// Type definition for the results from the API
type TResults = { name: string; url: string }[];

// Type definition for the structure of the API response
type TPokemonApi = {
  count: number; // Total number of Pokémon
  next: string | null; // URL for the next page of results, or null if there are no more pages
  previous: string; // URL for the previous page of results
  results: TResults; // Array of Pokémon results
};

type TPokemonApiType = {
  pokemon: {
    pokemon: {
      name: string;
      url: string;
    };
  }[];
};

// Asynchronous function to fetch all Pokémon from the API
function createGetPokemonsApi<T>(fGet: (resApi: T) => TPokemonsResult) {
  return async function (
    url: string,
    signal: AbortSignal
  ): Promise<Error | TPokemonsResult> {
    try {
      const res: T | Error = await pFetch(url, signal);
      if (res instanceof Error) throw res;
      return fGet(res);
    } catch (err) {
      if (err instanceof Error) return err;
      return new Error("An unknown error occurred"); // Return a generic error for unknown issues
    }
  };
}

const getPokemonsApi = createGetPokemonsApi((api: TPokemonApi) => {
  const pokemons = [...api.results];

  return { pokemons, next: api.next }; // Return the complete list of Pokémon
});

const getPokemonsTypeApi = createGetPokemonsApi((api: TPokemonApiType) => {
  const pokemons = api.pokemon.map((el) => el.pokemon);
  return { pokemons, next: null };
});

export { getPokemonsApi, getPokemonsTypeApi };
