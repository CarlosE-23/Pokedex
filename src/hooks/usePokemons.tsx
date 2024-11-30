import { TPokemon } from "../types/global.type";
import { pokemonApi } from "../assets/api";
import getPokemonsInfo from "../helpers/getPokemonsInfo";
import { getPokemonsApi, getPokemonsTypeApi } from "../helpers/getPokemons";
import { useEffect, useState, useRef } from "react";

export default function usePokemons(
  pokemonsNumber: number = 20,
  pokemonOrder: number = 0
) {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<TPokemon[]>([]);
  const [notResults, setNotResults] = useState(false);
  const [searchPokemonsDef] = useState(
    pokemonApi.def(pokemonsNumber, pokemonOrder)
  );
  const [searchPokemonsType, setSearchPokemonsType] = useState("");
  const [searchPokemonsNext, setSearchPokemonsNext] = useState<null | string>(
    null
  );
  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchPokemon = async (url: string) => {
    // Abort previous request if exists
    if (abortControllerRef.current) abortControllerRef.current.abort();

    const abort = new AbortController();
    abortControllerRef.current = abort;
    const signal = abort.signal;

    setLoading(true);
    setError(null);
    setNotResults(false);

    try {
      const resPokemonApi = searchPokemonsType
        ? await getPokemonsTypeApi(
            `${pokemonApi.type}${searchPokemonsType}`,
            signal
          )
        : await getPokemonsApi(url, signal);

      if (resPokemonApi instanceof Error) throw resPokemonApi;

      const newPokemons = await getPokemonsInfo(
        resPokemonApi.pokemons.map((el) => el.url),
        signal
      );

      if (newPokemons instanceof Error) throw newPokemons;

      if ([...pokemons, ...newPokemons].length === 0) setNotResults(true);

      setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
      setSearchPokemonsNext(resPokemonApi.next);
    } catch (err) {
      if (err instanceof Error) {
        if (err.name !== "AbortError") setError(err);
      } else setError(new Error("An unknown error occurred"));
    } finally {
      setLoading(false);
    }
  };

  const getNextPokemons = () =>
    searchPokemonsNext && fetchPokemon(searchPokemonsNext);
  const getDefPokemons = () => fetchPokemon(searchPokemonsDef);

  useEffect(() => {
    setPokemons([]);
    getDefPokemons();

    return () => {
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, [searchPokemonsType]);

  return {
    error,
    loading,
    pokemons,
    getDefPokemons,
    getNextPokemons,
    searchPokemonsType,
    setSearchPokemonsType,
    notResults,
  };
}
