import { useEffect, useState } from "react";
import "./ImagesPokemonsPrimary.style.css";
import useImagesPokemons from "../hooks/useImagesPokemons";
import { pokemonsImgDeafult } from "../assets/pokemonImgDeafult";
import { Link } from "react-router-dom";

type allPokemons = {
  name: string;
  imgURL: string;
}[];

function ImagesPokemonsPrimary({ numberPokemons }: { numberPokemons: 4 | 5 }) {
  const [allPokemons, setAllpokemons] = useState<allPokemons>([]);
  const { allPokemons: allPokemonsApi, error } =
    useImagesPokemons(numberPokemons);
  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    if (error) setAllpokemons([...pokemonsImgDeafult]);
    if (allPokemonsApi.length > 0) setAllpokemons(allPokemonsApi);
  }, [error, allPokemonsApi]);

  useEffect(() => {
    if (allPokemons.length > 0) setVisibility(true);
  }, [allPokemons]);

  if (allPokemons.length === 0) return null;
  return (
    <div
      className={`${numberPokemons === 5 ? "five-pokemons" : "four-pokemons"} ${
        visibility && "visibility-pokemon"
      }`}
    >
      {allPokemons.map((poke, index) => (
        <Link
          to={`/pokemon/${poke.name}`}
          className="poke-img-container"
          data-pokemon-number={index + 1}
          key={crypto.randomUUID()}
          title={poke.name}
        >
          <img src={poke.imgURL} alt={poke.name} />
        </Link>
      ))}
    </div>
  );
}

export default ImagesPokemonsPrimary;
