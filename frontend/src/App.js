import React from "react";
import {
  Route,
  Link,
  Routes,
  BrowserRouter as Router
} from "react-router-dom"

import Home from "./pages/Home";
import SEPractice from "./pages/SE-Practice";
import SubmitArticle from "./pages/Submit-Article"; 
// import NotFoundPage from "./pages/404";


function App() {
  return (
    <Router>
    <div>
      <h1>Software Engineering Practice Evidence Repository (SEPER)</h1>
        <ul className="header">
            <li><Link  to="/">Home</Link></li>
            <li><Link to="/SEPractice">Select the Practice</Link></li>
            <li><Link to="/SubmitArticle">Submit an Article</Link></li>
        </ul>
      <div className="content">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/SEPractice" element={<SEPractice/>}/>
        <Route  exact path="/SubmitArticle" element={<SubmitArticle/>}/>
      </Routes>
      </div>
    </div>
    </Router>


  );
}

export default App;
