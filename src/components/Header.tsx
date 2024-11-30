import { Link, useNavigate } from "react-router-dom";
import "./Header.style.css";
import { SiPokemon } from "react-icons/si";

function Header() {
  const navigator = useNavigate();
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") navigator("/pokemon/" + e.currentTarget.value);
  };
  return (
    <header>
      <Link to="/">
        <SiPokemon
          size={60}
          style={{ fontSize: "20px", strokeWidth: "0.2" }}
          className="header-icon"
        />
      </Link>
      <input
        type="text"
        name="searchPokemon"
        placeholder="Order / Name"
        autoComplete="off"
        onKeyUp={handleSearch}
      />
    </header>
  );
}

export default Header;
