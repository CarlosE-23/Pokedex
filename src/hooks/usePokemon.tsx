import { useEffect, useRef, useState } from "react";
import { TPokemon } from "../types/global.type";
import pFetch from "../helpers/fetch";
import { pokemonApi } from "../assets/api";
import { TPokemonApi } from "../types/pokemonApi.type";
import pokemonConverte from "../helpers/pokemonConverte";
import { TPokemonApiSpecies } from "../types/PokemonApiSpecies";

export default function usePokemon() {
  const [error, setError] = useState<Error | null>(null);
  const [pokemon, setPokemon] = useState<TPokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const refAbortController = useRef<AbortController>(new AbortController());

  const getPokemon = async (pokemonName: string) => {
    if (refAbortController.current) refAbortController.current.abort();
    const abort = new AbortController();
    const signal = abort.signal;
    refAbortController.current = abort;
    setLoading(true);
    setError(null);
    try {
      const res: TPokemonApi | Error = await pFetch(
        pokemonApi.pokemon(pokemonName),
        signal
      );
      if (res instanceof Error) throw res;
      const resDescription: TPokemonApiSpecies | Error = await pFetch(
        pokemonApi.pokemonSpecies(res.id),
        signal
      );
      if (resDescription instanceof Error) throw resDescription;
      const description =
        resDescription.flavor_text_entries.find(
          (el) => el.language.name === "en"
        )?.flavor_text || "";
      const evolutionChain = resDescription.evolution_chain.url;
      setPokemon({
        ...pokemonConverte(res, description, evolutionChain),
      });
    } catch (err) {
      if (err instanceof Error) {
        if (err.name !== "AbortError") return setError(err);
      } else return setError(new Error("An unknown error occurred"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    error && setPokemon(null);
  }, [error]);

  return { pokemon, error, loading, getPokemon };
}
