type PokemonAbility = {
  ability: {
    name: string; // Name of the ability
    url: string; // URL for more details about the ability
  };
  is_hidden: boolean; // Indicates if it is a hidden ability
  slot: number; // Slot of the ability
};

type PokemonStat = {
  base_stat: number; // Base value of the stat
  effort: number; // Effort value
  stat: {
    name: string; // Name of the stat (e.g., "speed", "defense")
    url: string; // URL for more details about the stat
  };
};

type PokemonSprite = {
  front_default: string; // URL of the default front sprite
  back_default: string; // URL of the default back sprite
  // You can add more sprites if necessary
};

type PokemonSpecies = {
  name: string; // Name of the species
  url: string; // URL for more details about the species
};

type PokemonEncounter = {
  location_area: {
    name: string; // Name of the encounter area
    url: string; // URL for more details about the area
  };
  version_details: {
    version: {
      name: string; // Name of the game version
      url: string; // URL for more details about the version
    };
    encounter_details: {
      max_chance: number; // Maximum chance of encounter
      encounter: {
        chance: number; // Probability of encounter
        method: {
          name: string; // Method of encounter (e.g., "walk", "surf")
          url: string; // URL for more details about the method
        };
      }[];
    }[];
  }[];
};

type PokemonTypes = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}[];

export type TPokemonApi = {
  abilities: PokemonAbility[]; // Abilities of the Pokémon
  base_experience: number; // Base experience
  cry: {}; // Information about the cry (you can define it more if you have details)
  forms: any[]; // Forms (you can define it more if you have details)
  game_indices: any[]; // Game indices (you can define it more if you have details)
  height: number; // Height in decimeters
  held_items: any[]; // Held items (you can define it more if you have details)
  id: number; // Identification of the Pokémon
  is_default: boolean; // Indicates if it is the default Pokémon
  location_area_encounters: string; // URL for the encounter areas
  moves: any[]; // Moves (you can define it more if you have details)
  name: string; // Name of the Pokémon
  order: number; // Order of appearance
  past_abilities: any[]; // Past abilities (you can define it more if you have details)
  past_types: any[]; // Past types (you can define it more if you have details)
  species: PokemonSpecies; // Species of the Pokémon
  sprites: PokemonSprite; // Sprites of the Pokémon
  stats: PokemonStat[]; // Stats of the Pokémon
  types: PokemonTypes; // Types of the Pokémon (you can define it more if you have details)
  weight: number; // Weight in hectograms
};
