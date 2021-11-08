import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import AboutMe from "./components/AboutMe/AboutMe";
import Temp from "./components/Temp/Temp";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Routes>
            <Route exact path="/main" component={Main} />
            <Route exact path="/aboutme" element={<AboutMe />}></Route>
            <Route path="/" component={Temp} />
          </Routes> */}
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
