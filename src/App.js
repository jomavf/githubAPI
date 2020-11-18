import "./App.css";
import History from "./pages/History/History";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TopBar } from "./layout/topBar";
import { Login } from "./pages/Login/Login";

function App() {
  const userId = useSelector((store) => {
    console.log(store);
    return store.user.id;
  });

  return (
    <Router>
      <TopBar></TopBar>
      <Switch>
        <Route exact path="/">
          {userId ? <Redirect to="/history" /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/history">
          <History></History>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
