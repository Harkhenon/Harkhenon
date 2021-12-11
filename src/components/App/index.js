// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import : local
import Home from 'src/components/Home';
import './app.scss';

// == Composant
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

// == Export
export default App;
