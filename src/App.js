import {Routes} from "react-router-dom";
import Button from "./comps/Button";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faCirclePlus,
  faCircleXmark,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/app.scss";

library.add(faCirclePlus, faCircleXmark, faCircleArrowLeft);

function App() {
  return (
    <div className="App">
      <Button>button</Button>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
