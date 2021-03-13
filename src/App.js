import logo from "./logo.svg";
import "./App.css";
import Form from "./component/Form";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./component/Cart";
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          {" "}
          <div style={{ marginTop: "100px" }}>
            {" "}
            <Form />
          </div>
        </Route>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
