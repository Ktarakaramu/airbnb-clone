import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={SearchPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
