import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Orare from "./pages/Orare";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Materiale from "./pages/Materiale";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/materiale" exact component={Materiale} />
          <Route path="/orare" exact component={Orare} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
