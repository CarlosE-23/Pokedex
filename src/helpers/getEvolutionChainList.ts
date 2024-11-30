type TChain = {
  evolves_to: TChain[];
  species: { name: string; url: string };
};

export type TEvolutionChain = {
  chain: TChain;
};

type TEvolutionChainList = string[];

export default function getEvolutionChainList(
  chain: TEvolutionChain
): TEvolutionChainList {
  const evolutionChain: TEvolutionChainList = [];

  const processChain = (currentChain: TChain) => {
    const { species, evolves_to } = currentChain;
    evolutionChain.push(species.name);

    if (evolves_to.length > 0) {
      evolves_to.forEach(processChain);
    }
  };

  processChain(chain.chain);

  return evolutionChain;
}
