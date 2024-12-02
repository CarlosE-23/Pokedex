import "./PokemonInfoStats.style.css";
import SpiderGraphic from "./SpiderGraphic";

type TProps = {
  stats: {
    name: string;
    baseStat: number;
  }[];
};

function PokemonInfoStats(props: TProps) {
  const { stats } = props;
  return (
    <div className="stats-container">
      <div className="stats">
        {stats.map((stat) => (
          <SpiderGraphic
            baseStat={stat.baseStat}
            name={stat.name}
            key={crypto.randomUUID()}
          />
        ))}
      </div>
    </div>
  );
}

export default PokemonInfoStats;
