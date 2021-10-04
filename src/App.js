import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Service">
            <Service></Service>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
