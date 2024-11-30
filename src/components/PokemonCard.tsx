import { useNavigate } from "react-router-dom";
import { TPokemon } from "../types/global.type";
import PokemonType from "./PokemonType";
import "./PokemonCard.style.css";
import starUppercase from "../helpers/starUppercase";

function PokemonCard({ pokemon }: { pokemon: TPokemon }) {
  const navigator = useNavigate();

  const handleNavigator = (el: React.MouseEvent<HTMLElement>) => {
    const namePokemon = el.currentTarget.dataset.pokemon;
    if (namePokemon) navigator(`/pokemon/${namePokemon}`);
  };

  return (
    <article
      className="pokemon-card"
      data-pokemon={pokemon.name}
      onClick={handleNavigator}
    >
      <div className="card-pokemon-container">
        <img
          src={pokemon.imgURL}
          alt={pokemon.name}
          className="pokemon-card-img"
        />
        <h3 translate="no">{starUppercase(pokemon.name)}</h3>
        <p>
          {pokemon.types.map((type) => (
            <PokemonType type={type} key={crypto.randomUUID()} />
          ))}
        </p>
      </div>
      <img
        src="./src/assets/img/list_pokemon_bg.png"
        alt="background"
        className="pokemon-card-background"
      />
    </article>
  );
}

export default PokemonCard;
