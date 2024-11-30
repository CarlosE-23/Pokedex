import ImagesPokemonSearch from "./ImagesPokemonSeach";
import SearchByType from "./SearchByTyoe";
import "./SearchPokemons.style.css";

function SearchPokemons() {
  return (
    <div className="search-pokemons">
      <ImagesPokemonSearch />
      <SearchByType />
    </div>
  );
}

export default SearchPokemons;
