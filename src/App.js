import "./App.css";
import History from "./pages/History/History";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { TopBar } from "./layout/topBar";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <TopBar></TopBar>
        <Redirect to="/login" />
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/history">
            <History></History>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
