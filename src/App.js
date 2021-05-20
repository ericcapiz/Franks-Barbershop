import {Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import  Barber  from './components/Barbers/Barber';
import Testimonial from './components/Testimonials/Testimonial';
import  Contact  from './components/Contact/Contact';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/barbers">
        <Barber />
      </Route>
      <Route exact path="/gallery">
        <Gallery />
      </Route>
      <Route exact path="/testimonials">
        <Testimonial />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
