import { useNavigate, useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import Header from "../components/Header";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";
import "./PokemonInfo.style.css";
import PokemonInfoContent from "../components/PokemonInfoContent";
import { useEffect } from "react";
import ReturnBeginning from "../components/ReturnBeginning";
import Footer from "../components/Footer";

function PokemonInfo() {
  const { error, pokemon, loading, getPokemon } = usePokemon();
  const params = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    const { order } = params;
    getPokemon(order?.toLowerCase() || "");
  }, [params]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pokemon]);

  const handleErrorAction = (e: React.MouseEvent) => {
    e.preventDefault();
    const { order } = params;
    getPokemon(order?.toLowerCase() || "");
  };

  const handleBackHome = () => navigator("/");

  return (
    <div className="pokemon-info-section">
      <Header />
      <main>
        {loading && <Loader />}
        {error && (
          <ErrorMessage
            error={error.message}
            action={handleErrorAction}
            message="Try Again"
          />
        )}
        {pokemon && !loading && <PokemonInfoContent pokemon={pokemon} />}
        {pokemon && !loading && (
          <div className="back-to-home">
            <span>Back To Home</span>
            <span>
              <ReturnBeginning action={handleBackHome} />
            </span>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default PokemonInfo;
