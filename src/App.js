import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import BottomNavbar from "./components/bottom-navbar/bottom-navbar.component";
import ReviewsPage from "./pages/reviewspage/reviews.component";

function App() {
  return (
    <div className="App font-sans">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/reviews" component={ReviewsPage} />
      </Switch>

      <BottomNavbar />
    </div>
  );
}

export default App;
