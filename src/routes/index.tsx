/* eslint-disable react-hooks/exhaustive-deps */
import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes } from './config';

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((route, index) => {
            return <Route key={index} exact={true} {...route} />;
          })}
          <Redirect to="/arts" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
