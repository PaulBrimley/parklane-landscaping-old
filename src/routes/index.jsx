import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { routeArr } from './routes';

function Routes(props) {
  return (
    <Router>
      <Switch>
        {routeArr.map(({ path, Component }) => {
          return (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition in={match != null} timeout={props.transitionTimeout || 200} classNames="cross-fade" unmountOnExit>
                  <div className="cross-fade">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}
export default Routes;
