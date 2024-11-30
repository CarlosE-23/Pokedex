import getPokemonTypeColor from "../helpers/getPokemonTypeColor";
import { TPokemon } from "../types/global.type";
import "./PokemonInfoData.style.css";

function PokemonInfoData({ pokemon }: { pokemon: TPokemon }) {
  const {
    imgURL,
    name,
    types,
    weight,
    height,
    baseExperience,
    abilities,
    description,
  } = pokemon;
  return (
    <div className="pokemon-data-container">
      <div className="img-container">
        <img src={imgURL} alt={name} />
      </div>
      <div className="pokemon-data">
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="content">
          <div className="type">
            <div className="title-content">
              <h3 className="secondary-title">Type:</h3>
            </div>
            <p>
              {types.map((type) => (
                <span
                  key={type}
                  style={{ backgroundColor: getPokemonTypeColor(type) }}
                  className="type-data"
                >
                  {type}
                </span>
              ))}
            </p>
          </div>
          <div className="height">
            <span className="secondary-title">Height: </span>
            <span className="data">{height / 10} meters</span>
          </div>
          <div className="weight">
            <span className="secondary-title">Weight: </span>
            <span className="data">{weight / 10} kilograms</span>
          </div>
          <div className="base-experience">
            <span className="secondary-title">Base Experience: </span>
            <span className="data">{baseExperience}</span>
          </div>
          <div className="abilities">
            <span className="secondary-title">Abilities: </span>
            <span className="data">
              {abilities.map((a) => a.name).join(" / ")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonInfoData;
