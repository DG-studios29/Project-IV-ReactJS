import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserSearch from './components/UserSearch';
import UserDetails from './components/UserDetails';
import RepoDetails from './components/RepoDetails';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Github Browser</h1>
        <Switch>
          <Route exact path="/">
            <UserSearch />
          </Route>
          <Route path="/user/:username">
            <UserDetails />
          </Route>
          <Route path="/repo/:repoName">
            <RepoDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
