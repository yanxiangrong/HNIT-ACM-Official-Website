import {Switch, Route, Redirect} from "react-router-dom";
import Home from "../views/Home";

function ChildRoutes() {
  return (
    <Switch>
      <Route path={"/home"}>
        <Home/>
      </Route>
      <Redirect from={"/"} to={"/home"}/>
    </Switch>
  )
}

export default ChildRoutes;