import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import { BrowserRouter } from "react-router-dom";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Container />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
