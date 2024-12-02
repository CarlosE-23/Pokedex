import { useNavigate } from "react-router-dom";
import "./PokemonInfoHeader.style.css";
import starUppercase from "../helpers/starUppercase";
import PrevImg from "../assets/img/arrow_pc_left.png";
import PrevBtn from "../assets/img/arrow_left_btn.png";
import NextImg from "../assets/img/arrow_pc_right.png";
import NextBtn from "../assets/img/arrow_right_btn.png";

function PokemonInfoHeader({
  currentPokemonOrder,
  pokemonName,
}: {
  currentPokemonOrder: number;
  pokemonName: string;
}) {
  const navigator = useNavigate();
  const handleNextArrow = () =>
    navigator(`/pokemon/${(currentPokemonOrder + 1).toString()}`);
  const handlePrevArrow = () =>
    navigator(`/pokemon/${(currentPokemonOrder - 1).toString()}`);

  return (
    <div className="pokemon-info-container">
      <div className="prev-container arrow-btn-container">
        <img src={PrevImg} alt="prev-img" className="background" />
        <img
          src={PrevBtn}
          alt="prev-btn"
          className="arrow-btn left"
          onClick={handlePrevArrow}
        />
      </div>
      <div className="title-container">
        <h1 translate="no">{starUppercase(pokemonName)}</h1>
        <h3>{currentPokemonOrder.toString().padStart(4, "0")}</h3>
      </div>
      <div className="next-container arrow-btn-container">
        <img src={NextImg} alt="next-img" className="background" />
        <img
          src={NextBtn}
          alt="next-btn"
          className="arrow-btn right"
          onClick={handleNextArrow}
        />
      </div>
    </div>
  );
}

export default PokemonInfoHeader;
