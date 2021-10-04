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
import AboutUs from './Components/About/AboutUs/AboutUs';
import NotFound from './Components/NotFound/NotFound';


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
          <Route path="/about">
           <AboutUs />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
