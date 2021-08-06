import {Switch, Route, Redirect} from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Join from "../views/Join";

function ChildRoutes() {
  return (
    <Switch>
      <Route path={"/home"}>
        <Home/>
      </Route>
      <Route path={"/about"}>
        <About/>
      </Route>
      <Route path={"/join"}>
        <Join/>
      </Route>
      <Redirect from={"/"} to={"/home"}/>
    </Switch>
  )
}

export default ChildRoutes;