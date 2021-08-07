import {Switch, Route, Redirect} from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Join from "../views/Join";
import Photos from "../views/Photos";
import ResultPage from "../views/ResultPage";

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
      <Route path={"/photos"}>
        <Photos/>
      </Route>
      <Route path={"/result"}>
        <ResultPage/>
      </Route>
      <Redirect from={"/"} to={"/home"}/>
    </Switch>
  )
}

export default ChildRoutes;