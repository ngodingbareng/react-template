import React, { Component } from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Container from "./components/layout/Container";
// import Modal from './components/layout/Modal';

import { Provider } from "react-redux";
import store from "./store";

import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/table.css";
import "./assets/css/form.css";
import "./assets/css/button.css";
import "./assets/css/modal.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Modal /> */}
            <Header />
            <Sidebar branding="React Example" />
            <Container />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
