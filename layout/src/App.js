import React from "react";
import Header from "./Components/Header/Header";
import About from "./Components/Footer/About";
import Contact from "./Components/Footer/Contact";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Science from "./Components/Header/Science";
import Business from "./Components/Header/Business";
import './App.css';
import logo from './homepage.jpg';
import Technology from "./Components/Header/Technology";
import TopHeadlines from "./Components/Header/TopHeadlines";
import SearchContent from "./Components/Header/SearchBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/science" component={Science} />
        <Route path="/business" component={Business} />
        <Route path="/technology" component={Technology} />
        <Route path="/topheadlines" component={TopHeadlines} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => {
  return(
    <div className="homepage">
    <h1 className="name">Get the real story!</h1>
    <img className="logo" src={logo}/>
    </div>
  )
};

export default App;
