import { TPokemon } from "../types/global.type";
import "./ListPokemonsSection.style.css";
import PokemonCard from "./PokemonCard";

type TProps = {
  pokemons: TPokemon[];
};

function ListPokemonsSection(props: TProps) {
  const { pokemons } = props;
  return (
    <div className="list-pokemons-section">
      {pokemons.map((poke) => (
        <PokemonCard pokemon={poke} key={poke.id} />
      ))}
    </div>
  );
}

export default ListPokemonsSection;
