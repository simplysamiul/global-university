import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/HomeComponent/Home/Home';
import Navbar from './Components/HomeComponent/Navbar/Navbar';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/home">
          <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
