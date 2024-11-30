import { TPokemon } from "../types/global.type";
import { TPokemonApi } from "../types/pokemonApi.type";
import pokemonConverte from "./pokemonConverte";

type TPokemons = string[];

export default async function getPokemonsInfo(
  pokemons: TPokemons,
  signal: AbortSignal
) {
  try {
    const resPokemonsInfo = await Promise.allSettled(
      pokemons.map((el) => fetch(el, { signal }))
    );

    const results: (TPokemonApi | null)[] = await Promise.all(
      resPokemonsInfo.map((res) => {
        if (res.status === "rejected") return null;

        return res.value.json();
      })
    );

    const pokemonsInfo: TPokemon[] = results
      .filter((el): el is TPokemonApi => el !== null)
      .map((el) => pokemonConverte(el, "", ""));
    return [...pokemonsInfo];
  } catch (err) {
    if (err instanceof Error) return err;
    return new Error("An unknown error occurred");
  }
}
