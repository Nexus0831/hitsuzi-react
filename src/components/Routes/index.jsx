import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Route
} from 'react-router';

import AddTax from './../AddTax';

class Routes extends React.Component {
  render() {
    return(
        <Switch>
          <Route
            path="/"
            exact
            render={
              (props) => {
                return (
                  <div>
                    <AddTax
                      {...props}
                    />
                  </div>
                )
              }
            }
            {...this.props}
          >
          </Route>
        </Switch>
    );
  }
}

export default Routes;
