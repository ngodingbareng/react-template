import React from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

import Users from "../users/Users";
import UserInsert from "../users/UserInsert";
import UserEdit from "../users/UserEdit";

const Container = ({location}) => {
    return (
      <div>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={'fade'}
          >
            <div className="container">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/user/add" component={UserInsert} />
                <Route exact path="/user/edit/:id" component={UserEdit} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
}

export default withRouter(Container);
