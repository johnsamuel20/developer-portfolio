import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Main, ProjectPage } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

function App() {

  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router basename='/developer-portfolio'>
        <ScrollToTop/>
        <Switch>
          <Route path="/" exact component={Main} />
          {/* <Route path="/blog" exact component={BlogPage} /> */}
          <Route path="/projects" exact component={ProjectPage} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
