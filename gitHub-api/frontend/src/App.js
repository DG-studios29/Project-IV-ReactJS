import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserSearch from './components/UserSearch';
import UserDetails from './components/UserDetails';
import RepoDetails from './components/RepoDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserSearch />} />
          <Route path="/user/:username" element={<UserDetails />} />
          <Route path="/repo/:owner/:repo" element={<RepoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
