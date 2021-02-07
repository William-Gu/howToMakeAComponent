import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import List from "./components/navList/list";
import TestComp from "./components/testComp";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/testHook">
            <TestComp/>
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
