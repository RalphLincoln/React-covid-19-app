import React, { useEffect } from 'react';

// IMPORTING MY CUSTOM CSS
import './App.css';

// IMPORTING MY PAGES
import DashBoard from './pages/DashBoard';
import About from './pages/About';
import News from './pages/News';
import Facts from './pages/Facts';
import RiskChecker from './pages/RiskChecker';
import SupportUs from './pages/SupportUs';
import Error from './pages/Error';
import Compose from './pages/Compose';

// IMPORTING REACT ROUTER DOM
import { Route, Switch } from 'react-router-dom';

// IMPORTING NAVBAR AND FOOTER FROM COMPONENTS
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';


// IMPORTING MY ANIMATION LIBRARY
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route exact path="/news" component={News} />
        <Route exact path="/facts" component={Facts} />
        <Route exact path="/risk" component={RiskChecker} />
        {/* <Route exact path="/support" component={SupportUs} /> */}
        <Route exact path="/about" component={About} />
        <Route exact path="/write" component={Compose} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
