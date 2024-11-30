import { pokemonApi } from "../assets/api";

export default function getPokemonTypeColor(type: string) {
  const result = pokemonApi.types.find((el) => el.name === type);
  return result?.color;
}
