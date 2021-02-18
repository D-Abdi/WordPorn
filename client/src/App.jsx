import './App.css';
import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Dutch from './pages/Words/Dutch/Dutch';
import English from './pages/Words/English/English';
import Words from './pages/Words/Words';
import AddWord from './pages/Words/Word/AddWord/AddWord';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/words' component={Words} />
          <Route exact path='/words/dutch' component={Dutch} />
          <Route exact path='/words/english' component={English} />
          <Route exact path='/word/add' component={AddWord} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
