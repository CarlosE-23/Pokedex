import "./Main.style.css";
import Header from "../components/Header";
import SearchPokemons from "../components/SeachPokemos";
import usePokemons from "../hooks/usePokemons";
import ListPokemonsSection from "../components/ListPokemonsSection";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import NextBtn from "../components/NextBtn";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import ReturnBeginning from "../components/ReturnBeginning";
import Footer from "../components/Footer";

function Main() {
  const {
    error,
    loading,
    pokemons,
    getNextPokemons,
    searchPokemonsType,
    setSearchPokemonsType,
    getDefPokemons,
    notResults,
  } = usePokemons();

  const navigator = useNavigate();
  const params = useParams();

  useEffect(() => {
    const { type } = params;
    setSearchPokemonsType(type || "");
  }, [params]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleActionErrorMessage = () => {
    params.type ? navigator("/") : getDefPokemons();
  };

  const handleActionExit = () => navigator("/");

  return (
    <div className="main-section">
      <Header />
      <SearchPokemons />
      <main>
        {searchPokemonsType && !loading && !error && (
          <div className="back-to-start">
            <ReturnBeginning action={handleActionExit} />
          </div>
        )}
        {notResults && (
          <ErrorMessage
            error={"No Results Found."}
            action={handleActionErrorMessage}
            message="Try Again"
          />
        )}
        <ListPokemonsSection pokemons={pokemons} />
        {error && (
          <ErrorMessage
            error={error.message}
            action={handleActionErrorMessage}
            message="Try Again"
          />
        )}
        {loading && <Loader />}
        {!loading && !error && pokemons.length > 0 && (
          <NextBtn action={getNextPokemons} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Main;
