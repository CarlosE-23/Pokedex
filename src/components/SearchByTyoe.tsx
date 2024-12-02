import "./SearchByType.style.css";
import { pokemonApi } from "../assets/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import TitleBackground from "../assets/img/advance_search_close_bg.png";
import SearchByTypeBackground from "../assets/img/advance_search_open_bg.png";

function SearchByType() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => (open ? setOpen(false) : setOpen(true));
  const handleClose = () => setOpen(false);

  return (
    <div className="search-by-type">
      <div className="title-container" onClick={handleOpen}>
        <h3 title="Open Search">Search By Type</h3>
        <img src={TitleBackground} alt="background" title="Open Search" />
      </div>
      <div className={`pokemon-types-container ${open && "open"}`}>
        <div className="pokemon-types-content">
          {pokemonApi.types.map((el) => (
            <Link
              to={`/pokemon/type/${el.id}`}
              className="pokemon-types"
              data-color={el.color}
              style={{ backgroundColor: el.color }}
              key={el.color}
            >
              {el.name}
            </Link>
          ))}
          <div
            className="pokemon-types-container-arrow"
            title="Close Search"
            onClick={handleClose}
          ></div>
        </div>
        <img
          src={SearchByTypeBackground}
          alt="background"
          className="pokemon-types-container-background"
        />
      </div>
    </div>
  );
}

export default SearchByType;
