import getPokemonTypeColor from "../helpers/getPokemonTypeColor";

function PokemonType({ type }: { type: string }) {
  return (
    <span
      className="pokemon-type"
      style={{ backgroundColor: getPokemonTypeColor(type) }}
    >
      {type}
    </span>
  );
}

export default PokemonType;
