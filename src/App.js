import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './modules/LandingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './CommonComponent/Navbar';
import Footer from './CommonComponent/Footer';
import ProductDesc from './modules/ProductDesc';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/product/:id" eaxct component={ProductDesc}></Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
