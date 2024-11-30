export type TPokemon = {
  id: number;
  order: number;
  name: string;
  types: string[];
  abilities: {
    name: string;
    url: string;
  }[];
  baseExperience: number;
  imgURL: string;
  weight: number;
  height: number;
  stats: {
    name: string;
    baseStat: number;
  }[];
  description: string;
  evolutionChain: string;
};

export type TPokemonsResult = {
  pokemons: {
    name: string;
    url: string;
  }[];
  next: string | null;
};
