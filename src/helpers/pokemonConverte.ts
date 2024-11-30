import { TPokemon } from "../types/global.type";
import { TPokemonApi } from "../types/pokemonApi.type";

export default function (
  pokemonApi: TPokemonApi,
  description: string,
  evolutionChain: string
): TPokemon {
  return {
    id: pokemonApi.id,
    order: pokemonApi.order,
    abilities: pokemonApi.abilities.map((a) => {
      return { name: a.ability.name, url: a.ability.url };
    }),
    baseExperience: pokemonApi.base_experience,
    imgURL: pokemonApi.sprites.front_default,
    name: pokemonApi.name,
    stats: pokemonApi.stats.map((s) => {
      return { name: s.stat.name, baseStat: s.base_stat };
    }),
    types: pokemonApi.types.map((t) => t.type.name),
    height: pokemonApi.height,
    weight: pokemonApi.weight,
    description,
    evolutionChain,
  };
}
