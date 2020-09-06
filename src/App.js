import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Posts from './Components/Posts/Posts';
import NotFound from './Components/NotFound/NotFound';
import PostDetail from './Components/PostDetail/PostDetail';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
          <Posts></Posts>
          </Route>
          <Route exact path="/posts">
          <Posts></Posts>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/posts/:id">
          <PostDetail></PostDetail>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
