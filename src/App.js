import "./App.css";
import Home from "./pages/Home";
import Basic from "./components/Basic";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/:id">
        <Basic />
      </Route>
    </div>
  );
}

export default App;
