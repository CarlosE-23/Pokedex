import { Link, useNavigate } from "react-router-dom";
import "./Header.style.css";
import { SiPokemon } from "react-icons/si";

function Header() {
  const navigator = useNavigate();
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.currentTarget.setCustomValidity("");
    if (e.key === "Enter") {
      const { value } = e.currentTarget;
      if (value.trim().match(/^[a-zA-Z0-9]+$/)) {
        navigator("/pokemon/" + value.trim());
        e.currentTarget.value = "";
      } else {
        if (!value) e.currentTarget.setCustomValidity("Complete This Field");
        else
          e.currentTarget.setCustomValidity(
            "Only Letters And Numbers Are Allowed"
          );
        e.currentTarget.reportValidity();
      }
    }
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
