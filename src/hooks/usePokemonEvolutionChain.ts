import { useEffect, useState } from "react";
import pFetch from "../helpers/fetch";
import getEvolutionChainList, {
  TEvolutionChain,
} from "../helpers/getEvolutionChainList";
import { pokemonApi } from "../assets/api";
import { TPokemon } from "../types/global.type";
import getPokemonsInfo from "../helpers/getPokemonsInfo";

export type TEvolutionChainList = TPokemon[];

export default function usePokemonEvolutionChain(url: string) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [abortController, setAbortController] = useState(new AbortController());
  const [evolutionChain, setEvolutionChain] = useState<TEvolutionChainList>([]);

  const getEvolutionChain = async () => {
    abortController.abort();
    const newAbortController = new AbortController();
    const signal = newAbortController.signal;
    setAbortController(newAbortController);
    setError(null);
    setLoading(true);
    try {
      const res: TEvolutionChain | Error = await pFetch(url, signal);
      if (res instanceof Error) throw res;
      const pokemons = getEvolutionChainList(res).map((el) =>
        pokemonApi.pokemon(el)
      ); //Converte pokemon to pokemon url

      const resPokemons = await getPokemonsInfo(pokemons, signal);
      if (resPokemons instanceof Error) throw resPokemons;
      setEvolutionChain([...resPokemons]);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        if (err?.name !== "AbortError") return setError(err);
      }
      return setError(new Error("An unknown error occurred"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvolutionChain();
  }, []);

  return {
    loading,
    error,
    evolutionChain,
    getEvolutionChain,
  };
}
