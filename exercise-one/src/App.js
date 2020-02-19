import React from 'react'; /* importing the react */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './App.css';

import ArticleListing from './pages/ArticleListing';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path='/article/:id'> {/* need :id for the item we are getting from the data*/}
            <Article />
          </Route>
          <Route path='/'>
          <ArticleListing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
