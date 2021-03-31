import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="App bg-gray-900 font-sans">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
