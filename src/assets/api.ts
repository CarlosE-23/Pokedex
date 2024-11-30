const def = (pokemonsNumber: number, pokemonOrder: number) =>
  `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsNumber}&offset=${pokemonOrder}`;

const pokemon = (name: string | number) =>
  `https://pokeapi.co/api/v2/pokemon/${name}`;

const type = "https://pokeapi.co/api/v2/type/";

const types = [
  {
    name: "normal",
    id: 1,
    color: "#A8A78D", // Color normal
  },
  {
    name: "fighting",
    id: 2,
    color: "#C22E28", // Color fighting
  },
  {
    name: "flying",
    id: 3,
    color: "#A98FF3", // Color flying
  },
  {
    name: "poison",
    id: 4,
    color: "#A33EA1", // Color poison
  },
  {
    name: "ground",
    id: 5,
    color: "#E2BF65", // Color ground
  },
  {
    name: "rock",
    id: 6,
    color: "#B6A136", // Color rock
  },
  {
    name: "bug",
    id: 7,
    color: "#A8B820", // Color bug
  },
  {
    name: "ghost",
    id: 8,
    color: "#705898", // Color ghost
  },
  {
    name: "steel",
    id: 9,
    color: "#B7B7CE", // Color steel
  },
  {
    name: "fire",
    id: 10,
    color: "#FBAE24", // Color fire
  },
  {
    name: "water",
    id: 11,
    color: "#6390F0", // Color water
  },
  {
    name: "grass",
    id: 12,
    color: "#7AC74C", // Color grass
  },
  {
    name: "electric",
    id: 13,
    color: "#F7D02C", // Color electric
  },
  {
    name: "psychic",
    id: 14,
    color: "#F95587", // Color psychic
  },
  {
    name: "ice",
    id: 15,
    color: "#96D9D6", // Color ice
  },
  {
    name: "dragon",
    id: 16,
    color: "#6F35FC", // Color dragon
  },
  {
    name: "dark",
    id: 17,
    color: "#705848", // Color dark
  },
  {
    name: "fairy",
    id: 18,
    color: "#D685AD", // Color fairy
  },
  {
    name: "stellar",
    id: 19,
    color: "#EAB8D1", // Color stellar
  },
];

const pokemonSpecies = (name: string | number) =>
  `https://pokeapi.co/api/v2/pokemon-species/${name}`;

export const pokemonApi = {
  def,
  type,
  pokemon,
  types,
  pokemonSpecies,
};
