import React from "react";
import {
  Route,
  NavLink,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";

// react-router-dom' (possible exports: BrowserRouter, HashRouter, Link, MemoryRouter, NavLink, Prompt, Redirect, Route, Router, StaticRouter, Switch, generatePath, matchPath, withRouter
import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
import NotFoundPage from "./pages/404";

function App() {
  return (
    <Router>
    <div>
      <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
            <li><NavLink exact to = "/">Home</NavLink></li>
            <li><NavLink to = "/SEPractice">Select the Practice</NavLink></li>
            <li><NavLink to = "/SubmitArticle">Submit an Article</NavLink></li>
        </ul>
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route  path="/SEPractice" component={SEPractice}/>
        <Route  path="/SubmitArticle" component={SubmitArticle}/>
        <Route exact path="/404" component={NotFoundPage}/>
        <Redirect to="/404" />

      </div>
    </div>
    </Router>



  );
}

export default App;
