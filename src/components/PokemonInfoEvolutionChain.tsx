import usePokemonEvolutionChain from "../hooks/usePokemonEvolutionChain";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import PokemonCard from "./PokemonCard";
import "./PokemonInfoEvolutionChain.style.css";

type TProps = {
  url: string;
};

function PokemonInfoEvolutionChain(props: TProps) {
  const { url } = props;
  const { error, evolutionChain, getEvolutionChain, loading } =
    usePokemonEvolutionChain(url);

  const handleErrorAction = () => getEvolutionChain();

  return (
    <section className="evolution-chain-section">
      <div className="evolution-chain-title">
        <h2>Evolution Chain</h2>
      </div>
      <div className="evolution-chain-container">
        {error && (
          <ErrorMessage
            action={handleErrorAction}
            error={error.message}
            message="Try Again"
          />
        )}
        {loading && <Loader />}
        {evolutionChain.length > 0 && !error && (
          <div className="evolution-chain">
            {evolutionChain.map((el) => (
              <PokemonCard pokemon={el} key={crypto.randomUUID()} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PokemonInfoEvolutionChain;
