import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./components/pages/Detail";
import { Home } from "./components/pages/Home";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <div className="bg-gray-800 min-h-sc min-h-screen">
      <ReactNotification />
      <Router>
        <Link to="/">
          <h1 className="text-5xl text-yellow-600 text-center pt-12 font-medium">
            Movie DataBase
          </h1>
        </Link>
        <Switch>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
