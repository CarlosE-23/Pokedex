import { useEffect, useState } from "react";
import { TPokemon } from "../types/global.type";
import "./PokemonInfoContent.style.css";
import PokemonInfoHeader from "./PokemonInfoHeader";
import PokemonInfoData from "./PokemonInfoData";
import PokemonInfoStats from "./PokemonInfoStats";
import PokemonInfoEvolutionChain from "./PokemonInfoEvolutionChain";

function PokemonInfoContent({ pokemon }: { pokemon: TPokemon }) {
  const { name, id, evolutionChain } = pokemon;
  const [isMovil, setIsMovil] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width:600px)");
    const handleMedia = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) setIsMovil(true);
      else setIsMovil(false);
    };

    query.addEventListener("change", handleMedia);
    handleMedia(query);

    return () => query.removeEventListener("change", handleMedia);
  }, []);

  return (
    <div className={`pokemon-info-content ${isMovil ? "mobil" : "desk"}`}>
      <PokemonInfoHeader currentPokemonOrder={id} pokemonName={name} />
      <PokemonInfoData pokemon={pokemon} />
      <PokemonInfoStats stats={pokemon.stats} />
      <PokemonInfoEvolutionChain url={evolutionChain} />
    </div>
  );
}

export default PokemonInfoContent;
