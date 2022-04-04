import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Navi from "./components/layouts/navbar/Navi";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navi />
      <Switch>
        <Route path={"/"} exact component={Home}></Route>
        <Route path={"/products"} exact component={Products}></Route>
        <Route path={"/productDetail"} exact component={ProductDetails}></Route>
        <Route path={"/login"} exact component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
