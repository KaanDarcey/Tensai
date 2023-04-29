import Navigation from "./comps/Navigation";
import "./styles/app.scss";
import Study from "./pages/Study/Study";
import Decks from "./pages/Decks/Decks";

function App() {
  return (
    <>
      <Navigation style={{position: "absolute", bottom: "0"}} />
      <div className="App">
        <Study />
      </div>
    </>
  );
}

export default App;
