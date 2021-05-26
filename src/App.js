import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import { BrowserRouter } from "react-router-dom";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container />
      </div>
    </BrowserRouter>
  );
}

export default App;
