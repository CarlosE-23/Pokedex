import { useEffect, useState } from "react";
import "./ImagesPokemonSearch.style.css";
import ImagesPokemonsPrimary from "./ImagesPokemonsPrimary";

function ImagesPokemonSearch() {
  const [viewMobil, setViewMobil] = useState(false);

  useEffect(() => {
    const query = matchMedia("(max-width:700px)");
    const handleMedia = (e: MediaQueryList | MediaQueryListEvent) => {
      if (e.matches) setViewMobil(true);
      else setViewMobil(false);
    };

    handleMedia(query);
    query.addEventListener("change", handleMedia);

    return () => {
      query.removeEventListener("change", handleMedia);
    };
  }, []);

  return (
    <div className="pokemons-images">
      <div className="title-container">
        <img src="./src/assets/img/pokedex_bg.png" alt="title-background" />
        <h1>Pokedex</h1>
      </div>
      <div className={`pokemons-container`}>
        {!viewMobil && <ImagesPokemonsPrimary numberPokemons={4} />}
        <ImagesPokemonsPrimary numberPokemons={5} />
        {!viewMobil && <ImagesPokemonsPrimary numberPokemons={4} />}
        <img
          src="./src/assets/img/pokemon_list_bg.png"
          alt="animation"
          className="animation-pokemons-container"
        />
      </div>
    </div>
  );
}

export default ImagesPokemonSearch;
