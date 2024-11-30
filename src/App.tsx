import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import PokemonInfo from "./pages/PokemonInfo";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div id="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pokemon/type/:type" element={<Main />} />
          <Route path="/pokemon/:order" element={<PokemonInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
