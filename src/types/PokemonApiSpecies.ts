export type TPokemonApiSpecies = {
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string };
  }[];
  evolution_chain: {
    url: string;
  };
};
