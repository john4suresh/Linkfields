import "./App.css";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import DetailPokemon from "./components/DetailPokemon";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/:id">
        <DetailPokemon />
      </Route>
    </div>
  );
}

export default App;
