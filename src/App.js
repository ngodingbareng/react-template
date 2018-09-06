import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotFound from "./components/pages/NotFound";
import Home from "./components/pages/Home";

import Header from "./components/layout/Header";
// import Modal from './components/layout/Modal';

import Users from "./components/users/Users";
import UserInsert from "./components/users/UserInsert";
import UserEdit from "./components/users/UserEdit";

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
            <Header branding="React Personal Example" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/user/add" component={UserInsert} />
                <Route exact path="/user/edit/:id" component={UserEdit} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
