import { useEffect, useState } from "react";
import { TPokemon } from "../types/global.type";
import getPokemonsInfo from "../helpers/getPokemonsInfo";
import { pokemonApi } from "../assets/api";
import randomNumber from "../helpers/randomNumber";

export default function useImagesPokemons(numberPokemons: number) {
  const [allPokemons, setAllPokemons] = useState<TPokemon[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abort = new AbortController();
    const signal = abort.signal;

    const getPokemons = async () => {
      setLoading(true);
      const pokemonsUrl = [];

      for (let i = 0; i < numberPokemons; i++) {
        pokemonsUrl.push(pokemonApi.pokemon(randomNumber(893)));
      }

      try {
        const res = await getPokemonsInfo(pokemonsUrl, signal);
        if (res instanceof Error) throw res;
        setAllPokemons(res);
      } catch (err) {
        if (err instanceof Error) return setError(err);
        return setError(new Error("An unknown error occurred"));
      } finally {
        setLoading(false);
      }
    };

    getPokemons();

    return () => {
      abort.abort();
    };
  }, []);

  return { allPokemons, error, loading };
}
